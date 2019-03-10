import { connect } from 'react-redux'
import { loginUserThunk } from '../../../actions/auth'
import Login from './view'

const mapStateToProps = state => ({
  user: state.login.user,
  isLoading: state.login.isLoading,
  error: state.login.error
})

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => { dispatch(loginUserThunk(user))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
