import { connect } from 'react-redux'
import AdminProductTable from './view'
import { deleteProductThunk, getProductByIdThunk } from '../../../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
  error: state.products.errors
})

const mapDispatchToProps = dispatch => ({
  getProductById: (id) => { dispatch(getProductByIdThunk(id))},
  deleteProduct: (id) => { dispatch(deleteProductThunk(id)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductTable)
