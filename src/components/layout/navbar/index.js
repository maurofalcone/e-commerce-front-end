import Navbar from './view'
import { connect } from 'react-redux'
import { logoutUserThunk } from '../../../actions/auth'

const mapDispatchToProps = dispatch => ({
  logoutUser: () => { dispatch(logoutUserThunk())}
})


export default connect(null, mapDispatchToProps)(Navbar)
