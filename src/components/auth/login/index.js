import { connect } from 'react-redux'
import { loginUserThunk } from '../../../actions/auth'
import Login from './view'

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.errors
})

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => { dispatch(loginUserThunk(user))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
