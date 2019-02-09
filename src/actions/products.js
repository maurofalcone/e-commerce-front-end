import { get, post, remove, put } from '../helpers/api'

export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING'
export const GET_PRODUCTS_FULLFILED = 'GET_PRODUCTS_FULLFILED'
export const GET_PRODUCTS_REJECTED = 'GET_PRODUCTS_REJECTED'
export const ADD_PRODUCT_PENDING = 'ADD_PRODUCT_PENDING'
export const ADD_PRODUCT_FULLFILED = 'ADD_PRODUCT_FULLFILED'
export const ADD_PRODUCT_REJECTED = 'ADD_PRODUCT_REJECTED'
export const EDIT_PRODUCT_PENDING = 'EDIT_PRODUCT_PENDING'
export const EDIT_PRODUCT_FULLFILED = 'EDIT_PRODUCT_FULLFILED'
export const EDIT_PRODUCT_REJECTED = 'EDIT_PRODUCT_REJECTED'
export const DELETE_PRODUCT_PENDING = 'DELETE_PRODUCT_PENDING'
export const DELETE_PRODUCT_FULLFILED = 'DELETE_PRODUCT_FULLFILED'
export const DELETE_PRODUCT_REJECTED = 'DELETE_PRODUCT_REJECTED'


export const getProductsThunk = () => dispatch => {
  dispatch({
    type: GET_PRODUCTS_PENDING
  })
  get('/products')
    .then(list => {
      console.log("list: ", list);
      dispatch({
        type: GET_PRODUCTS_FULLFILED,
        list,
      })
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCTS_REJECTED,
        error: err
      })
    })
}

export const addProductThunk = item => dispatch => {
  dispatch({
    type: ADD_PRODUCT_PENDING,
  })
  console.log('add product pending')
  post('/products', item)
    .then(() => {
      dispatch({
        type: ADD_PRODUCT_FULLFILED,
        product: item
      })
      console.log('add product fullfiled');
    })
    .catch(errMsg => {
      dispatch({
        type: ADD_PRODUCT_REJECTED,
        error: errMsg
      })
      console.log('add product rejected');
    })
  }

export const editProductThunk = item => dispatch => {
  dispatch({
    type: EDIT_PRODUCT_PENDING
  })
  put('/products/'+item.id, item.id)
    .then((res) => {
      dispatch({
        type: EDIT_PRODUCT_FULLFILED,
        product: item,
        list: res
      })
    })
    .catch(errMsg => {
      dispatch({
        type: EDIT_PRODUCT_REJECTED,
        error: errMsg
      })
    })
}

export const deleteProductThunk = id => dispatch => {
  dispatch({
    type: DELETE_PRODUCT_PENDING
  })
  remove('/products/'+id, id)
    .then(() => {
      dispatch({
        type: DELETE_PRODUCT_FULLFILED,
        productId: id
      })
    })
    .catch(errMsg => {
      dispatch({
        type: DELETE_PRODUCT_REJECTED,
        error: errMsg
      })
    })
}
