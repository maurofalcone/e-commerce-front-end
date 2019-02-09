import { connect } from 'react-redux'
import ProductList from './view'
import { getProductsThunk } from '../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
  errorMessage: state.products.error
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => { dispatch(getProductsThunk()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
