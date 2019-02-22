import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import isEmpty from "is-empty"

const token = localStorage.getItem("jwtToken")

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
    console.log(token)
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value })
    }
  onSubmit = e => {
      const userData = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.loginUser(userData)
      this.props.history.push("/")
    }

  render() {
    if(!token) {
      return (
        <div className="container">
          <div id="loginRow" className="row">
            <div className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to home </Link>
              <div className="col s12">
                <h4>
                  <b>Login</b> below
                </h4>
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input onChange={this.onChange} value={this.state.email} id="email" type="email"/>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <input onChange={this.onChange} value={this.state.password} id="password" type="password"/>
                  <label htmlFor="password">Password</label>
                </div>
                <div className="col s12">
                  <button id="loginBtn" type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3"> Login </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <h3>You are already logged</h3>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default Login
