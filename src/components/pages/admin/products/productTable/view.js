import React, { Component } from "react"
import { Link } from 'react-router-dom'
import "./style.css"

class AdminProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      price: this.props.price
    }
  }

  handleEdit = (e) => {
    e.preventDefault()
    this.props.getProductById(this.state.id)

  }

  handleDelete = (e) => {
    e.preventDefault()
    this.props.deleteProduct(this.props.id)
  }

  render() {
      return (
          <tr>
            <td>{this.state.id}</td>
            <td>{this.state.name}</td>
            <td>{this.state.price}</td>
            <td>{this.state.description}</td>
            <td>
              <button id="editProduct" onClick={this.handleEdit}><Link to={`/admin/products/edit/${this.state.id}`}><i className="material-icons small">edit</i></Link></button>
              <button id="deleteProduct" onClick={this.handleDelete}><i className="material-icons small">delete</i></button>
            </td>
          </tr>
      )
  }
}

export default AdminProductTable
