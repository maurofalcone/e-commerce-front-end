import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="nav-extended">
        <div class="nav-wrapper blue">
          <Link to="/" class="brand-logo"><i class="material-icons large">shopping_cart</i>Store</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li class="tab right"><Link to="myCart"><i class="material-icons">shopping_cart</i></Link></li>
          </ul>
        </div>
        <div class="nav-content blue">
          <ul class="tabs tabs-transparent">
            <li class="tab"><Link to="/">Categories</Link></li>
            <li class="tab"><Link to="/">Products</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
