import { connect } from 'react-redux'
import AddProduct from './view'
import { addProductThunk } from '../../../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
  error: state.products.errors
})

const mapDispatchToProps = dispatch => ({
  addProduct: item => { dispatch(addProductThunk(item))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct)
