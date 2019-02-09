import { connect } from 'react-redux'
import AdminProductTable from './view'
import { deleteProductThunk } from '../../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list,
  isLoading: state.products.isLoading,
  errorMessage: state.products.error
})

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => { dispatch(deleteProductThunk(id)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductTable)
