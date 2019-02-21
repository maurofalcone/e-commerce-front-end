import { connect } from 'react-redux'
import PrivateAdminRoute from './view'

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, null)(PrivateAdminRoute)
