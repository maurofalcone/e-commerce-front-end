import initialState from '../initial-states/products'
import {
  LOGIN_USER_PENDING,
  LOGIN_USER_FULLFILED,
  LOGIN_USER_REJECTED,
  SET_CURRENT_USER,
  CHECK_JWT_PENDING,
  CHECK_JWT_FULLFILED,
  CHECK_JWT_REJECTED
} from '../actions/auth'

const reducer = (state = initialState, action) => {

  switch (action.type) {

      case LOGIN_USER_PENDING:
        return {
          ...state,
          error: '',
          isLoading: true
        }

      case LOGIN_USER_FULLFILED: {
        return {
          ...state,
          error: '',
          isLoading: false
        }
      }

      case LOGIN_USER_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }

      case SET_CURRENT_USER:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: !state.isAuthenticated
        }

      case CHECK_JWT_PENDING:
        return {
          ...state,
          isLoading: true,
          error:''
        }
      case CHECK_JWT_FULLFILED:
        return {
          ...state,
          isLoading: false,
          error: ''
        }
        case CHECK_JWT_REJECTED:
          return {
            ...state,
            error: action.error
          }

      default:
        return state
  }
}

export default reducer
