import initialState from '../initial-states/products'
import {
  REGISTER_USER_PENDING,
  REGISTER_USER_FULLFILED,
  REGISTER_USER_REJECTED,
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
        error: action.error
      }

      default:
        return state
  }
}

export default reducer
