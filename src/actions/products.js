export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const addProduct = item => ({
  type: ADD_PRODUCT,
  product: item
})

export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  productId: id
})
