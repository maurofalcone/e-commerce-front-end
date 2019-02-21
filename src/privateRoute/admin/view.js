import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isEmpty from 'is-empty'

const token = localStorage.getItem("jwtToken")
const aux = localStorage.getItem("currentUser")
const user = JSON.parse(aux)

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render = {props => {
      if(!isEmpty(token)) {
          if(user.isAdmin)
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
