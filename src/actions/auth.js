import jwt_decode from "jwt-decode"
import { post } from "../helpers/api"

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REGISTER_USER_PENDING = "REGISTER_USER_PENDING"
export const REGISTER_USER_FULLFILED = "REGISTER_USER_FULLFILED"
export const REGISTER_USER_REJECTED = "REGISTER_USER_REJECTED"
export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING"
export const LOGIN_USER_FULLFILED = "LOGIN_USER_FULLFILED"
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED"

// Register User
export const registerUserThunk = (userData, history) => dispatch => {
  dispatch({
    type: REGISTER_USER_PENDING
  })
  post('/users/register', userData)
  .then(res => {
    dispatch({
      type: REGISTER_USER_FULLFILED
    })
    history.push("/login") // re-direct to login on successful register
})
  .catch(error => {
      dispatch({
            type: REGISTER_USER_REJECTED,
            errorMsg: error.data
          })
        }
      )
    }
// Login - get user token
export const loginUserThunk = userData => dispatch => {
  dispatch({
    type: LOGIN_USER_PENDING
  })
  console.log('login pending')
    post("/users/login", userData)
    .then(res => {
      dispatch({
        type: LOGIN_USER_FULLFILED
      })
      const { token } = res.data
      localStorage.setItem("jwtToken", token)

      // Set token to Auth header
      //setAuthToken(token)
      .set('Authorization', token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      dispatch(
        setCurrentUser(decoded)
      )
    })
    .catch(error => {
        dispatch({
          type: LOGIN_USER_REJECTED,
          errorMsg: error.data
        })
      })
}
// Set logged in user
export const setCurrentUser = decoded => dispatch => {
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
