import { connect } from 'react-redux'
import EditProduct from './view'
import { getProductsThunk, editProductThunk, getProductByIdThunk } from '../../../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
  error: state.products.errors
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => { dispatch(getProductsThunk()) },
  getProductById: (id) => { dispatch(getProductByIdThunk(id))},
  editProduct: item => { dispatch(editProductThunk(item))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct)
