import { connect } from 'react-redux'
import Register from './view'
import { registerUserThunk } from '../../../actions/auth'
  
  const mapStateToProps = state => ({
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    error: state.auth.error
  })
  
  const mapDispatchToProps = dispatch => ({
    loginUser: (user) => { dispatch(registerUserThunk(user))},
  })

export default connect(mapStateToProps,mapDispatchToProps)(Register)
