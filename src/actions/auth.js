import { post } from "../helpers/api"

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REGISTER_USER_PENDING = "REGISTER_USER_PENDING"
export const REGISTER_USER_FULLFILED = "REGISTER_USER_FULLFILED"
export const REGISTER_USER_REJECTED = "REGISTER_USER_REJECTED"
export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING"
export const LOGIN_USER_FULLFILED = "LOGIN_USER_FULLFILED"
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED"
export const CHECK_JWT_PENDING = "CHECK_JWT_PENDING"
export const CHECK_JWT_FULLFILED = "CHECK_JWT_FULLFILED"
export const CHECK_JWT_REJECTED = "CHECK_JWT_REJECTED"

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
})
  .catch(error => {
      dispatch({
            type: REGISTER_USER_REJECTED,
            error: error
          })
        }
      )
    }
// Login - get user token
export const loginUserThunk = userData => dispatch => {
  dispatch({
    type: LOGIN_USER_PENDING
  })
    post("/users/login", userData)
    .then(res => {
      dispatch({
        type: LOGIN_USER_FULLFILED
      })
      dispatch(checkJWT(res))
    })
    .catch(error => {
      dispatch({
        type: LOGIN_USER_REJECTED,
        error: error
      })
    })
}

export const checkJWT = token => dispatch => {
  dispatch({
    type: CHECK_JWT_PENDING
  })
  post('/users/checkJWT', token)
  .then(res => {
    dispatch({
      type: CHECK_JWT_FULLFILED
    })
    localStorage.setItem("jwtToken", res)
    localStorage.setItem("currentUser", JSON.stringify(res.data.user))
    dispatch(setCurrentUser(res.data))
  })
  .catch(error => {
    dispatch({
      type: CHECK_JWT_REJECTED,
      error:error
    })
  })
}

export const setCurrentUser = data => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: data.user,
    isAuthenticated: data.isAuthenticated
  })
    window.location.reload()
}

export const logoutUserThunk = () => dispatch => {
  localStorage.removeItem("jwtToken")
  localStorage.removeItem("currentUser")
  let data = {
    data: {
      user:'',
      isAuthenticated: false
    }
  }
  dispatch(setCurrentUser(data))
}
