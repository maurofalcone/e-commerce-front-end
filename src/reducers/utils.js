import initialState from '../initial-states/utils'
import { SHOWN, HIDDEN } from '../actions/utils'

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case SHOWN:
      return {
        ...state,
        shown: true
      }

    case HIDDEN:
      return {
        ...state,
        shown: false
      }

    default:
      return state
    }
}

export default reducer
