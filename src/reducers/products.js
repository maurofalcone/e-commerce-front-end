import initialState from '../initial-states/products'
import { ADD_PRODUCT, DELETE_PRODUCT} from '../actions/products'

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        list: [
          ...state.list,
          action.product
        ]
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
