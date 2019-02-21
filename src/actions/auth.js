import { jwt } from 'jsonwebtoken'
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
      console.log(res)
      console.log('decoding token')
      post('/users/checkJWT', res)
      .then(res => {
        localStorage.setItem("jwtToken", res)
        console.log(res.data.user)
        dispatch (
           setCurrentUser(res.data.user)
         )
      })
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
  // Set current user to empty object {} which will set isAuthenticated to false
  let decoded = {}
  dispatch(setCurrentUser(decoded))
}
