import { get, postFile, remove, put } from '../helpers/api'

export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING'
export const GET_PRODUCTS_FULLFILED = 'GET_PRODUCTS_FULLFILED'
export const GET_PRODUCTS_REJECTED = 'GET_PRODUCTS_REJECTED'
export const GET_PRODUCT_PENDING = 'GET_PRODUCT_PENDING'
export const GET_PRODUCT_FULLFILED = 'GET_PRODUCT_FULLFILED'
export const GET_PRODUCT_REJECTED = 'GET_PRODUCT_REJECTED'
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
    .then(res => {
      if(!res.error) {
        dispatch({
          type: GET_PRODUCTS_FULLFILED,
          list: res,
        })
      }
      else {
        dispatch({
          type: GET_PRODUCTS_REJECTED,
          error: res.error
        })  
      }
    })
    .catch(error => {
      dispatch({
        type: GET_PRODUCTS_REJECTED,
        error: error.error
      })
    })
}

export const getProductByIdThunk = id => dispatch => {
  dispatch({
    type: GET_PRODUCT_PENDING
  })
  get('/products/'+id, id)
    .then(res => {
      if(!res.error) {
        dispatch({
          type: GET_PRODUCT_FULLFILED,
          list: res,
        })
      }
      else {
        dispatch({
          type: GET_PRODUCT_REJECTED,
          error: res.error
        })
      }
    })
    .catch(error => {
      dispatch({
        type: GET_PRODUCT_REJECTED,
        error: error.error
      })
    })
}

export const addProductThunk = item => dispatch => {
  dispatch({
    type: ADD_PRODUCT_PENDING,
  })
  postFile('/products', item)
    .then((res) => {
      if(!res.error) {
        dispatch({
          type: ADD_PRODUCT_FULLFILED,
        })
      }
      else {
        dispatch({
          type: ADD_PRODUCT_REJECTED,
          error: res.error
        })  
      }
    })
    .catch(error => {
      dispatch({
        type: ADD_PRODUCT_REJECTED,
        error: error.error
      })
    })
  }

export const editProductThunk = item => dispatch => {
  dispatch({
    type: EDIT_PRODUCT_PENDING
  })
  put('/products/' + item.id, item)
    .then(res => {
      if(!res.error) {
        dispatch({
          type: EDIT_PRODUCT_FULLFILED,
          list: res
        })
      }
      else {
        dispatch({
          type: EDIT_PRODUCT_REJECTED,
          error: res.error
        })  
      }
    })
    .catch(error => {
      dispatch({
        type: EDIT_PRODUCT_REJECTED,
        error: error.error
      })
    })
}

export const deleteProductThunk = id => dispatch => {
  dispatch({
    type: DELETE_PRODUCT_PENDING
  })
  remove('/products/'+id, {id:id})
    .then((res) => {
      if(!res.error) {
        dispatch({
          type: DELETE_PRODUCT_FULLFILED,
          productId: id
        })
      }
      else {
        dispatch({
          type: DELETE_PRODUCT_REJECTED,
          error: res.error
        })
      }
    })
    .catch(error => {
      dispatch({
        type: DELETE_PRODUCT_REJECTED,
        error: error.error
      })
    })
}
