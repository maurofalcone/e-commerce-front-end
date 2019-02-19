import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// export const PrivateAdminRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route {...rest} render = {props => {
//       if(this.props.isAuthenticated) {
//           if(this.props.user.isAdmin)
//             return <Component {...props} />
//       }
//       else
//         return <Redirect to="/login" />
//     }} />
//   )
// }
const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render = {props => {
      if(true) {
          if(false)
            return <Component {...props} />
          else
            return <Redirect to="/warning" />
      }
      else
        return <Redirect to="/login" />
    }} />
  )
}

export default PrivateAdminRoute
