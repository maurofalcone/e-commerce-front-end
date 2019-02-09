import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import categories from './categories'
import utils from './utils'
const rootReducer = combineReducers({
  auth,
  categories,
  products,
  utils,
})

export default rootReducer
