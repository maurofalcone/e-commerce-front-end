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
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
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
