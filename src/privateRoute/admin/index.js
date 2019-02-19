import { connect } from 'react-redux'
import PrivateAdminRoute from './view'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps,null)(PrivateAdminRoute)
