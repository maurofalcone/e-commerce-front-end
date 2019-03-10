import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import { Link, Redirect } from 'react-router-dom'
import isEmpty from 'is-empty'

const token = localStorage.getItem("jwtToken")

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      errorEmail:'',
      errorPassword:'',
      redirect:false
    }
  }
  emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  validate = () => {
    let email = this.emailIsValid(this.state.email)
    if(!email) {
      this.setState({errorEmail:'invalid email'})
      return false
    }
    if(isEmpty(this.state.email)) {
      this.setState({errorEmail:'invalid email'})
      return false
    }
    if(isEmpty(this.state.password) || (this.state.password.length < 6)) {
      this.setState({errorPassword:'invalid password'})
      return false
    }
      return true
  }
 
  clearForm = () => {
    this.setState({password:'',email:''})
  }

  clearError = () => {
    this.setState({errorEmail:'', errorPassword:''})
  }

  onChange = e => {
    e.preventDefault()
      this.setState({ [e.target.id]: e.target.value }, () => this.clearError())
  }

  onSubmit = e => {
    e.preventDefault()
    if(this.validate()) {
      const userData = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.loginUser(userData)
        this.setState({ redirect:true }, () => this.clearForm())
    }
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
                      <div>
                        <label className="red-text">{this.state.errorEmail}</label>
                      </div>
                      <div className="input-field col s12">
                        <input onChange={this.onChange} value={this.state.password} id="password" type="password"/>
                        <label htmlFor="password">Password</label>
                      </div>
                      <div>
                        <label className="red-text">{this.state.errorPassword}</label>
                      </div>
                      <div>
                        <label className="red-text">{this.props.error}</label>
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
            <div>
              <Redirect to="/" />
            </div>
          )
        }
      }
    }
  }

export default Login
