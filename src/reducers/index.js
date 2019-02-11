import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import categories from './categories'

const rootReducer = combineReducers({
  auth,
  categories,
  products
})

export default rootReducer
