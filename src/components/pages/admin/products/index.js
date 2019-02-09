import { connect } from 'react-redux'
import AdminProductList from './view'
import { addProductThunk, getProductsThunk } from '../../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
  errorMessage: state.products.error
})

const mapDispatchToProps = dispatch => ({
  addProduct: item => { dispatch(addProductThunk(item)) },
  getProducts: () => { dispatch(getProductsThunk()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductList)
