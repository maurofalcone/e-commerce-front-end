import React, {Component } from "react"
import Product from "./product/view"
import './style.css'

class ProductList extends Component {

  componentWillMount() {
      const { getProducts } = this.props
      getProducts()
  }

  mapProducts() {
    const { products } = this.props
     return products.map(item => (
         <Product key={item.id} id={item.id} name={item.name} price={item.price} description={item.description}/>
    ))
  }

  render() {
    return (
      <div id="containerProductList" className="container halign-wrapper">
        <div className="row">
          {this.mapProducts()}
        </div>
      </div>
    )
  }
}
export default ProductList
