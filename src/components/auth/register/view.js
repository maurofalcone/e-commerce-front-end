import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import isEmpty from 'is-empty'
import ReactLoading from 'react-loading'
import './style.css'

const token = localStorage.getItem("jwtToken")

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errorName:'',
      errorEmail:'',
      errorPassword:'',
      errorPassword2:''
    }
  }

  emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  validate = () => {
    if(isEmpty(this.state.name)) {
      this.setState({ errorName:'please enter a name' })
      return false
    }
    let email = this.emailIsValid(this.state.email)
    if(!email) {
      this.setState({ errorEmail:'invalid email' })
      return false
    }
    if(isEmpty(this.state.email)) {
      this.setState({ errorEmail:'invalid email' })
      return false
    }
    if(isEmpty(this.state.password) || (this.state.password.length < 6)) {
      this.setState({ errorPassword:'invalid password' })
      return false
    }
    if(isEmpty(this.state.password2) || (this.state.password2.length < 6)) {
      this.setState({ errorPassword2:'invalid password' })
      return false
    }
      return true
  }
 
  clearForm = () => {
    this.setState({ password:'',email:'' })
  }

  clearError = () => {
    this.setState({ errorName:'',errorEmail:'', errorPassword:'', errorPassword2:'' })
  }

  onChange = e => {
     this.setState({ [e.target.id]: e.target.value }, () => { this.clearError() })
  }

  onSubmit = e => {
      e.preventDefault()
      if(this.validate()) {
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
      }
      this.clearForm()
      this.props.registerUser(newUser)
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
              <div className="row">
                <div className="col s8 offset-s2">
                  <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to home
                  </Link>
                  <div className="col s12 registerColumn">
                    <h4>
                      <b>Register</b> below
                    </h4>
                    <p className="grey-text text-darken-1">
                      Already have an account? <Link to="/login">Log in</Link>
                    </p>
                  </div>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                      <input onChange={this.onChange} value={this.state.name} id="name" type="text"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div>
                      <label className="red-text">{this.state.errorName}</label>
                    </div>
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
                    <div className="input-field col s12">
                      <input onChange={this.onChange} value={this.state.password2} id="password2" type="password"/>
                      <label htmlFor="password2">Confirm Password</label>
                    </div>
                    <div>
                      <label className="red-text">{this.state.errorPassword2}</label>
                    </div>
                    <div className="red-text">{this.props.error}</div>
                    <div className="col s12 registerColumn">
                      <button type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3"> Sign up </button>
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
              <div className="col">
                <div className="row s12">
                  <h3>You are already logged</h3>
                </div>
              </div>
            </div>
          )
        }
    }
    }
  }
export default Register
