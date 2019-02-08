import React, { Component } from "react"
import AdminProductTable from "./product/view"
import "./style.css"

class AdminProductList extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
      // this.props.getProducts()
      // const { products } = this.props
      // console.log(products)
      // if(products.length > 0)
        this.getProducts()
  }

  getProducts() {
    const { products } = this.props
     return products.map(item => (
         <AdminProductTable key={item.id} id={item.id} name={item.name} price={item.price} description={item.description}/>
    ))
  }

  render() {
      return (
        <div id="admin-product-list-container" className="container halign-wrapper">
          <div className="row">
            <div className="col s12">
              <table className="stripped centered">
                     <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Description</th>
                          <th>Options</th>
                        </tr>
                      </thead>
                     <tbody>
                        {this.getProducts()}
                     </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
}

export default AdminProductList
