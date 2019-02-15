import React, { Component } from "react"
import AdminProductTable from "./productTable"
import "./style.css"

class AdminProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shown:this.props.shown,
      productName:'',
      productDescription:'',
      productPrice:'',
      action:this.props.action
    }
  }

  componentWillMount() {
      const { getProducts } = this.props
      getProducts()
  }

  mapProducts() {
      return this.props.products.map((item, index) => (
          <AdminProductTable key={index} {...item}/>
       ))
  }

  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.id]:e.target.value})
  }

  handleAdd = (e) => {
    e.preventDefault()
    this.props.history.push('/admin/products/add')
    this.setState({ shown:!this.state.shown, action:'add' })
  }

  render() {
        return (
          <div id="admin-product-list-container" className="container halign-wrapper">
            <div className="row">
              <div className="col s10">
                <table className="responsive-table centered">
                       <thead>
                          <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Options</th>
                          </tr>
                        </thead>
                       <tbody>
                          {this.mapProducts()}
                       </tbody>
                </table>
              </div>
              <br />
                <div className="col">
                  <button id="addProduct" onClick={ this.handleAdd }><i className="material-icons small">add_box</i></button>
                </div>
            </div>
          </div>
        )
      }
}

export default AdminProductList
