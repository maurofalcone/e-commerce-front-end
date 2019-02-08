import React, { Component } from "react"
import AdminProductTable from "./product/view"
import "./style.css"

class AdminProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shown:false
    }
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

  handleAdd = (e) => {
    e.preventDefault()
    this.setState({ shown:!this.state.shown })
  }

  handleSave = (e) => {
    e.preventDefault()
    this.setState({ shown:!this.state.shown })
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.setState({ shown:!this.state.shown })
  }

  modal() {
    return (
      <div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s5">
              <input id="productName" type="text"/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s5">
              <input id="productPrice" type="text"/>
              <label htmlFor="productPrice">Price</label>
            </div>
            <div className="input-field col s5">
              <textarea id="productDescription" type="text"/>
              <label htmlFor="productDescription">Description</label>
            </div>
            <button onClick={ this.handleSave } id="addProductSave" className="btn btn-large waves-effect waves-light hoverable blue"><span className="white-text">Save</span></button>
            <button onClick={ this.handleCancel } id="addProductCancel" className="btn btn-large waves-effect white hoverable black-text">Cancel</button>
          </form>
      </div>
    )
  }

  render() {
    if(this.state.shown === false) {
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
                          <th>Options</th>
                        </tr>
                      </thead>
                     <tbody>
                        {this.getProducts()}
                     </tbody>
              </table>
            </div>
            <br />
              <div className="col">
                <button id="addProduct" onClick={this.handleAdd}><i className="material-icons small">add_box</i></button>
              </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div id="admin-product-list-container" className="container halign-wrapper">
          {this.modal()}
        </div>
      )
    }
  }

}

export default AdminProductList
