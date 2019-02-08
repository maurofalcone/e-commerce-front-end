import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

class AdminProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      price: this.props.price,
      action: null
    }
  }

  handleAdd = (e) => {
    e.preventDefault()
    console.log("click")
  }

  render() {
      return (
          <tr>
            <td>{this.state.id}</td>
            <td>{this.state.name}</td>
            <td>{this.state.price}</td>
            <td>{this.state.description}</td>
            <td>
              <button id="addProduct" onClick={this.handleAdd}><i className="material-icons small">add_box</i></button>
              <button id="editProduct" onClick={this.handleEdit}><i className="material-icons small">edit</i></button>
              <button id="deleteProduct" onClick={this.handleDelete}><i className="material-icons small">delete</i></button>
            </td>
          </tr>
      )
  }
}

export default AdminProductTable
