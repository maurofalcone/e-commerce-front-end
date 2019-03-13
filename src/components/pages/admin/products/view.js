import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import AdminProductTable from './productTable'
import './style.css'

class AdminProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      productName:'',
      productDescription:'',
      productPrice:'',
    }
  }

  componentDidMount() {
      const { getProducts } = this.props
      getProducts()
  }

  mapProducts() {
    if(this.props.error === '' || this.props.error === null || this.props.error === undefined) {
      if(this.props.products.length > 0) {
        return this.props.products.map((item, index) => (
            <AdminProductTable key={index} {...item}/>
        ))
      }
     }
  }

  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.id]:e.target.value})
  }

  handleAdd = (e) => {
    e.preventDefault()
    this.props.history.push('/admin/products/add')
  }

  render() {
    if(this.props.error){
      return (
        <h1>{this.props.error}</h1>
      )
    }
    else if(this.props.isLoading) {
      return(
          <div className="container">
              <h6>Loading</h6>
              <ReactLoading type="spinningBubbles" color="black" height={'5%'} width={'5%'}></ReactLoading>
          </div>
      )
    }
    else {
      return (
        <div id="admin-product-list-container" className="container halign-wrapper">
          <div className="row">
            <div className="col s10">
              <table className="centered">
                     <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Price</th>
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
}

export default AdminProductList
