import { connect } from 'react-redux'
import { loginUserThunk } from '../../../actions/auth'
import Login from './view'

const mapStateToProps = state => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => { dispatch(loginUserThunk(user))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
