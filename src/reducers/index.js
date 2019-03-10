import { combineReducers } from 'redux'
import login from './login'
import register from './register'
import products from './products'

const rootReducer = combineReducers({
  login,
  register,
  products
})

export default rootReducer
