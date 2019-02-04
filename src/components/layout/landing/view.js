import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome!</b> to my store
            </h4>
            <button style={{ width: "150px", borderRadius: "3px",letterSpacing: "1.5px"}} className="btn btn-large waves-effect waves-light hoverable blue"><Link to="register"><span className="white-text">Register</span></Link></button>
            <button style={{ marginLeft: "2rem", width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large waves-effect white hoverable black-text"><Link to="login">Log In</Link></button>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
