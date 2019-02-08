import React, {Component } from "react"
import Product from "./product/view"

class ProductList extends Component {

  getProducts = () => {
    return <Product/>
  }

  render() {
    return (
      <div style={{ height: "75vh" }} className="container halign-wrapper">
        <div className="row">
          {this.getProducts()}
        </div>
      </div>
    )
  }
}
export default ProductList
