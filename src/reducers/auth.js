import { isEmpty } from "is-empty"
import initialState from '../initial-states/products'
import {
  REGISTER_USER_PENDING,
  REGISTER_USER_FULLFILED,
  REGISTER_USER_REJECTED,
  LOGIN_USER_PENDING,
  LOGIN_USER_FULLFILED,
  LOGIN_USER_REJECTED


} from '../actions/auth'

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case REGISTER_USER_PENDING:
      return {
        ...state,
        error: '',
        isLoading: true
      }

    case REGISTER_USER_FULLFILED: {
      return {
        ...state,
        error: '',
        isLoading: false
      }
    }

    case REGISTER_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.errorMsg
      }

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
          error: action.errorMsg
        }

      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        }

      case USER_LOADING:
        return {
          ...state,
          loading: true
        }

    default:
      return state

  }

}

export default reducer
