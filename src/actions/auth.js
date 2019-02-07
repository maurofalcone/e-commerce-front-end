import jwt_decode from "jwt-decode"
import { post } from "../helpers/api"
import { isEmpty } from "is-empty"

export const GET_ERRORS = "GET_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REGISTER_USER_PENDING = "REGISTER_USER_PENDING"
export const REGISTER_USER_FULLFILED = "REGISTER_USER_FULLFILED"
export const REGISTER_USER_REJECTED = "REGISTER_USER_REJECTED"

// Register User
export const registerUserThunk = (userData, history) => dispatch => {
  dispatch({
    type: REGISTER_USER_PENDING
  })
  post('/users/register', userData)
  .then(res => {
    type: REGISTER_USER_FULLFILED,
    history.push("/login") }) // re-direct to login on successful register
  .catch(error => {
      dispatch({
            type: REGISTER_USER_REJECTED,
            errorMsg: error.data
          })
        }
      })
  )
}
// Login - get user token
export const loginUserThunk = userData => dispatch => {
  dispatch({
    type: LOGIN_USER_PENDING
  })
    post("/users/login", userData)
    .then(res => {
      type: LOGIN_USER_FULLFILED
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data
      localStorage.setItem("jwtToken", token)
      // Set token to Auth header
      //setAuthToken(token)
      .set('Authorization', token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch(error =>
        dispatch({
          type: LOGIN_USER_REJECTED,
          errorMsg: error.data
        })
      })
    )
}
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Log user out
export const logoutUserThunk = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken")
  // Remove auth header for future requests
  //setAuthToken(false)
  .set('Authorization', '')
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}
