import initialState from '../initial-states/products'
import {
  DELETE_PRODUCT,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FULLFILED,
  GET_PRODUCTS_REJECTED,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_FULLFILED,
  ADD_PRODUCT_REJECTED
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
        error: action.err
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
        error: action.errorMsg
      }

    case DELETE_PRODUCT:
      return {
        ...state,
        list: state.list.filter(
          item => item.id !== action.productId
        )
      }

    default:
      return state

  }

}

export default reducer
