import React, { Component } from "react"
import AdminProductTable from "./product/view"
import "./style.css"

class AdminProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shown:false,
      productName:'',
      productDescription:'',
      productPrice:'',
      action:''
    }
  }

  componentWillMount() {
      const { getProducts } = this.props
      getProducts()
  }

  mapProducts() {
    const { products } = this.props
     return products.map(item => (
         <AdminProductTable key={item.id} id={item.id} name={item.name} price={item.price} description={item.description}/>
    ))
  }

  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.id]:e.target.value})
  }

  handleAdd = (e) => {
    e.preventDefault()
    this.setState({ shown:!this.state.shown, action:'add' })
    console.log('handle add ' + this.state.action)
  }

  handleSave = (e) => {
    e.preventDefault()
    console.log(this.state.action);
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
    else if(this.state.action === 'edit'){
      console.log('editar')
    }
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.setState({ shown:!this.state.shown, action:'' })
  }

  modal() {
    return (
      <div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s5">
              <input onChange={this.handleOnChange} value={this.state.productName} id="productName" type="text"/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s5">
              <input onChange={this.handleOnChange} value={this.state.productPrice} id="productPrice" type="text"/>
              <label htmlFor="productPrice">Price</label>
            </div>
            <div className="input-field col s5">
              <textarea onChange={this.handleOnChange} value={this.state.productDescription} id="productDescription" type="text"/>
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
