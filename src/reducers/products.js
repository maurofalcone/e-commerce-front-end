import initialState from '../initial-states/products'
import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FULLFILED,
  GET_PRODUCTS_REJECTED,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_FULLFILED,
  GET_PRODUCT_REJECTED,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_FULLFILED,
  ADD_PRODUCT_REJECTED,
  EDIT_PRODUCT_PENDING,
  EDIT_PRODUCT_FULLFILED,
  EDIT_PRODUCT_REJECTED,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_FULLFILED,
  DELETE_PRODUCT_REJECTED,
} from '../actions/products'

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_PRODUCTS_PENDING:
      return {
        ...state,
        error: '',
        isLoading: true
      }

    case GET_PRODUCTS_FULLFILED: {
      return {
        ...state,
        error: '',
        isLoading: false,
        list: action.list
      }
    }

    case GET_PRODUCTS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

      case GET_PRODUCT_PENDING:
        return {
          ...state,
          error: '',
          isLoading: true
        }

      case GET_PRODUCT_FULLFILED: {
        return {
          ...state,
          error: '',
          isLoading: false,
          list: action.list
        }
      }

      case GET_PRODUCT_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }

    case ADD_PRODUCT_PENDING:
      return {
        ...state,
        error: '',
        isLoading: true
      }

    case ADD_PRODUCT_FULLFILED: {
      console.log(action)
      return {
        ...state,
        error: '',
        isLoading: false,
        list: [
          ...state.list,
          action.product
        ]
      }
    }

    case ADD_PRODUCT_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

      case EDIT_PRODUCT_PENDING:
        return {
            ...state,
            error: '',
            isLoading: true
        }

      case EDIT_PRODUCT_FULLFILED:
        return {
          ...state,
          error: '',
          isLoading: false,
          list: action.list
        }

      case EDIT_PRODUCT_REJECTED:
        return {
          ...state,
          error: action.error,
          isLoading: false
        }

    case DELETE_PRODUCT_PENDING:
      return {
          ...state,
          error: '',
          isLoading: true
      }

    case DELETE_PRODUCT_FULLFILED:
      return {
        ...state,
        error: '',
        isLoading: false,
        list: state.list.filter(
          item => item.id !== action.productId
        )
      }

    case DELETE_PRODUCT_REJECTED:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    default:
      return state
  }
}

export default reducer
