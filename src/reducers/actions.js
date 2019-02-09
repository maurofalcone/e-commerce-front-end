import initialState from '../initial-states/actions'
import { EDIT } from '../actions/actions'

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case EDIT:
      return {
        ...state,
        action:'edit',
        shown:true,
        item:action.item
      }

    default:
      return state
    }
}

export default reducer
