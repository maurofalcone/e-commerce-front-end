import React, {Component } from "react"
import { Link } from "react-router-dom"
import Product from "./product/view"

class ProductList extends Component {

  getProducts = () => {
    return "get products by mapping"
  }

  render() {
    return (
      <div style={{ height: "75vh" }} className="container halign-wrapper">
        <div className="row">
          {this.getProducts}
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    )
  }
}
export default ProductList
