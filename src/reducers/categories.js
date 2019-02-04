import initialState from '../initial-states/categories'
import { ADD_CATEGORIE, DELETE_CATEGORIE } from '../actions/categories'

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_CATEGORIE:
      return {
        ...state,
        list: [
          ...state.list,
          action.categorie
        ]
      }

    case DELETE_CATEGORIE:
      return {
        ...state,
        list: state.list.filter(
          item => item.id !== action.categorieId
        )
      }

    default:
      return state
    }
}

export default reducer
