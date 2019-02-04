import React, { Component } from "react"
import { Link } from "react-router-dom"

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      name:"",
      description:"",
      price:"",
      image:""
    }
  }
  render() {
    return (
      <div className="col s4">
      <div className="card" style={{height:"55vh",width:"20vw"}}>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" style={{height:"25vh"}} src="" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
            <p><i className="material-icons">attach_money</i></p>
            <a><i className="material-icons right">add_shopping_cart</i></a>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
      </div>
      </div>
    )
  }
}
export default ProductList
