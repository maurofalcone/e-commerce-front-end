import React, { Component } from "react"
import AdminProductTable from "./product/view"
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

  componentWillReceiveProps(nextProps,props) {
    if(this.props.action !== '' || null || undefined) {
      this.setState({action:this.props.action, shown:!this.props.shown})
    }
    if(this.props.action === 'edit'){
        this.setState({action:this.props.action, shown:!this.props.shown})
    }
  }

  componentWillMount() {
      const { getProducts } = this.props
      getProducts()
  }

  mapProducts() {
    const { products } = this.props
      return products.map((item, index) => (
          <AdminProductTable key={index} {...item}/>
       ))
  }

  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.id]:e.target.value})
  }

  handleAdd = (e) => {
    e.preventDefault()
    this.setState({ shown:!this.state.shown, action:'add' })
  }

  handleSave = (e) => {
    e.preventDefault()
    const newProduct = {
      name:this.state.productName,
      price:this.state.productPrice,
      description:this.state.productDescription
    }
    if(this.state.action === 'add') {
        this.props.addProduct(newProduct)
        //move to another lifecycle
        this.setState({shown:!this.state.shown})
    }
    else if(this.state.action === 'edit') {
        this.props.editProduct(newProduct)
        this.setState({shown:!this.state.shown})
    }
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.setState({ shown:!this.state.shown, action:'' })
  }

  modal() {
    if(this.state.action === 'edit') {
      this.setState({productName:this.props.item.name, productDescription:this.props.item.description, productPrice:this.props.item.price})
    }
    return (
      <div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s5">
              <input onChange={this.handleOnChange} value={this.state.productName} id="productName" type="text"/>
              <label htmlFor="name">Name</label>
              <span className="red-text">{this.props.errorMessage.name}</span>
            </div>
            <div className="input-field col s5">
              <input onChange={this.handleOnChange} value={this.state.productPrice} id="productPrice" type="text"/>
              <label htmlFor="productPrice">Price</label>
              <span className="red-text">{this.props.errorMessage.price}</span>
            </div>
            <div className="input-field col s5">
              <textarea onChange={this.handleOnChange} value={this.state.productDescription} id="productDescription" type="text"/>
              <label htmlFor="productDescription">Description</label>
              <span className="red-text">{this.props.errorMessage.description}</span>
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
