import Navbar from './view'
import { connect } from 'react-redux'
import { logoutUserThunk } from '../../../actions/auth'

const mapStateToProps = state => ({
  user: state.login.user
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => { dispatch(logoutUserThunk())}
})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
