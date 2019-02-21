import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isEmpty from 'is-empty'
import { connect } from 'react-redux'
const token = localStorage.getItem("jwtToken")

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render = {props => {
      if(!isEmpty(token)) {
          if(this.props.user.isAdmin)
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
