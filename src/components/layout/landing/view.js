import React, { Component } from 'react'
import './style.css'

const token = localStorage.getItem("jwtToken")

class Landing extends Component {
  render() {
    if(!token) {
      return (
        <div id="landingWrapper" className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Welcome!</b> to my store
              </h4>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div id="landingWrapper" className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
            </div>
          </div>
        </div>
      )
    }
  }
}
export default Landing
