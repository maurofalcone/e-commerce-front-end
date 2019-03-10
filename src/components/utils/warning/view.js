import React, { Component } from 'react'
import './style.css'

class Warning extends Component {
  render () {
    return (
      <div>
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s2">
              <br/>
              <br/>
              <br/>
              <br/>
              <i className="material-icons medium">security</i>
            </div>
            <div className="col s10">
              <blockquote>
                <h1>Access denied</h1>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Warning
