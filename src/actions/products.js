import { get, post, remove, put } from '../helpers/api'

export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING'
export const GET_PRODUCTS_FULLFILED = 'GET_PRODUCTS_FULLFILED'
export const GET_PRODUCTS_REJECTED = 'GET_PRODUCTS_REJECTED'
export const ADD_PRODUCT_PENDING = 'ADD_PRODUCT_PENDING'
export const ADD_PRODUCT_FULLFILED = 'ADD_PRODUCT_FULLFILED'
export const ADD_PRODUCT_REJECTED = 'ADD_PRODUCT_REJECTED'
export const MODIFY_PRODUCT_PENDING = 'MODIFY_PRODUCT_PENDING'
export const MODIFY_PRODUCT_REJECTED = 'MODIFY_PRODUCT_REJECTED'
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
      console.log("err: ", err);
      dispatch({
        type: GET_PRODUCTS_REJECTED,
        err
      })
    })
}

export const addProductThunk = item => dispatch => {
  dispatch({
    type: ADD_PRODUCT_PENDING,
  })
  post('/products', item)
    .then(() => {
      dispatch({
        type: ADD_PRODUCT_FULLFILED,
        product: item
      })
    })
    .catch(errMsg => {
      dispatch({
        type: ADD_PRODUCT_REJECTED,
        errorMsg: 'No se pudo agregar el item'
      })
    })
  }

export const modifyProductThunk = item => dispatch => {
  dispatch({
    type: MODIFY_PRODUCT_PENDING
  })
  put('/products/'+item.id, item.id)
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT_FULLFILED,
        idProduct: item.id
      })
      dispatch({
        type: ADD_PRODUCT_FULLFILED,
        product: res.item
      })
    })
    .catch(errMsg => {
      dispatch({
        type: MODIFY_PRODUCT_REJECTED,
        errorMsg: 'No se pudo editar el item'
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
        errorMsg: 'No se pudo eliminar el item'
      })
    })
}
