import React, { Component } from "react"
import { Link } from "react-router-dom"

class Product extends Component {
  constructor() {
    super()
    this.state = {
      name:"Product name",
      description:"description",
      price:"500",
      image:""
    }
  }
  render() {
    return (
      <div className="col s4">
      <div className="card" style={{height:"50vh",width:"20vw"}}>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" style={{height:"35vh"}} src="" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.state.name}<i className="material-icons right">more_vert</i></span>
            <p style={{fontSize:"17pt"}}>
              <i className="material-icons tiny">attach_money</i><span>{this.state.price}</span>
              <a><i className="material-icons right">add_shopping_cart</i></a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
            <p>{this.state.description}</p>
          </div>
      </div>
      </div>
    )
  }
}
export default Product
