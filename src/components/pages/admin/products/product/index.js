import { connect } from 'react-redux'
import AdminProductTable from './view'
import { deleteProductThunk, editProductThunk } from '../../../../../../actions/products'
import { edit } from '../../../../../../actions/actions'

const mapStateToProps = state => ({
  isLoading: state.products.isLoading,
  errorMessage: state.products.error
})

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => { dispatch(deleteProductThunk(id)) },
  editProduct: item => { dispatch(editProductThunk(item)) },
  edit: action => { dispatch(edit(action))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductTable)
