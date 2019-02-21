import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isEmpty from 'is-empty'

const token = localStorage.getItem("jwtToken")

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render = {props => {
      if(!isEmpty(token))
        return <Component {...props} />
      else
        return <Redirect to="/login" />
    }} />
  )
}

export default PrivateRoute
