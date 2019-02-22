import React, { Component } from "react"
import ReactLoading from 'react-loading'
import { Link } from "react-router-dom"

const token = localStorage.getItem("jwtToken")

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  onChange = e => {
    e.preventDefault()
      this.setState({ [e.target.id]: e.target.value })
    }

  onSubmit = e => {
    e.preventDefault()
      const userData = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.loginUser(userData)
    }

  render() {
      if(this.props.isLoading) {
        return (
          <div className="container">
            <h6>Loading</h6>
              <ReactLoading type="spinningBubbles" color="black" height={'5%'} width={'5%'}></ReactLoading>
          </div>
        )
      }
      else {
      if(!token) {
        return (
          <div className="container">
            <div id="loginRow" className="row">
              <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect"><i className="material-icons left">keyboard_backspace</i>Back to home</Link>
                <div className="col s12">
                  <h4>
                    <b>Login</b> below
                  </h4>
                  <p className="grey-text text-darken-1">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
                <form>
                  <div className="input-field col s12">
                    <input onChange={this.onChange} value={this.state.email} id="email" type="email"/>
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input onChange={this.onChange} value={this.state.password} id="password" type="password"/>
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="col s12">
                    <button id="loginBtn" onClick={this.onSubmit} type="button" className="btn btn-large waves-effect waves-light hoverable blue accent-3"> Login </button>
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
}
export default Login
