import React, { Component } from 'react'
import Product from './product'
import ReactLoading from 'react-loading'
import './style.css'

class ProductList extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  mapProducts() {
    const { products } = this.props
     return ( products.map(item => (
         <Product key={item.id} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image}/>
     ))
   )
  }

  render() {
      if(this.props.isLoading) {
        return (
          <div className="container">
            <h6>Loading</h6>
            <ReactLoading type="spinningBubbles" color="black" height={'5%'} width={'5%'}></ReactLoading>
          </div>
        )
      }
      else {
        if(this.props.error) {
          return (
            <div className="container">
              <p>{this.props.error}</p>
            </div>
          )
      }
      else {
        return (
          <div id="containerProductList" className="container halign-wrapper">
            <div className="row">
              {this.mapProducts()}
            </div>
          </div>
        )
      }
    }
  }
}
export default ProductList
