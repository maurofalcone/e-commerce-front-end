import { connect } from 'react-redux'
import Register from './view'
import { registerUserThunk } from '../../../actions/auth'
  
  const mapStateToProps = state => ({
    user: state.register.user,
    isLoading: state.register.isLoading,
    error: state.register.error
  })
  
  const mapDispatchToProps = dispatch => ({
    registerUser: (user, history) => { dispatch(registerUserThunk(user, history))},
  })

export default connect(mapStateToProps, mapDispatchToProps)(Register)
