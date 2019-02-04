import React, { Component } from "react"
import { Link } from "react-router-dom"

class Navbar extends Component {

  render() {
    return (
        <nav className="nav-extended">
          <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo"><i className="material-icons large">shopping_cart</i>Store</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Log in</Link></li>
              <li className="tab right"><Link to="myCart"><i className="material-icons">shopping_cart</i></Link></li>
            </ul>
          </div>
          <div className="nav-content blue">
            <ul className="tabs tabs-transparent">
              <li className="tab"><Link to="/categories">Categories</Link></li>
              <li className="tab"><Link to="/products">Products</Link></li>
            </ul>
          </div>
        </nav>
    );
  }
}
export default Navbar;
