import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import categories from './categories'
import actions from './actions'
const rootReducer = combineReducers({
  auth,
  categories,
  products,
  actions
})

export default rootReducer
