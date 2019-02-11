import { connect } from 'react-redux'
import AdminProductList from './view'
import { addProductThunk, getProductsThunk, editProductThunk } from '../../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
  error: state.products.error,
})

const mapDispatchToProps = dispatch => ({
  addProduct: item => { dispatch(addProductThunk(item)) },
  getProducts: () => { dispatch(getProductsThunk()) },
  editProduct: item => { dispatch(editProductThunk(item))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductList)
