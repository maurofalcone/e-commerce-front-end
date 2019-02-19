import React, { Component } from 'react'
import './style.css'

class Warning extends Component {
  render () {
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s3">
          <br />
          <br />
          <i className="material-icons medium">info</i>
          </div>
          <div className="col s9">
            <blockquote>
              <h1>Access denied</h1>
            </blockquote>
          </div>
        </div>
      </div>
    )
  }
}

export default Warning
