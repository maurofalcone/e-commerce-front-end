import React, { Component } from "react"
import { Link } from "react-router-dom"
import './style.css'
const token = localStorage.getItem("jwtToken")

class Navbar extends Component {

  isLoggedIn() {
    if(!token) {
      return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      )
    }
    else {
      return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="myCart"><i className="material-icons">shopping_cart</i></Link></li>
          <li><Link to="/" onClick={this.handleLogout}>Logout</Link></li>
        </ul>
      )
    }
  }

  handleLogout = (e) => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    return (
        <nav className="nav-extended">
          <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo"><i className="material-icons large">shopping_cart</i>Store</Link>
              {this.isLoggedIn()}
          </div>
          <div className="nav-content blue">
            <ul className="tabs tabs-transparent">
              <li className="tab"><Link to="/products">Products</Link></li>
            </ul>
          </div>
        </nav>
      )
    }
}

export default Navbar
