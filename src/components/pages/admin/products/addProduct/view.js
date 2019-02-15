import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import "./style.css"

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: '',
      selectedFile:'',
      redirect:false
    }
  }

  onChangeName = (e) => {
    e.preventDefault()
    this.setState({name:e.target.value})
  }
  onChangePrice = (e) => {
    e.preventDefault()
    this.setState({price:e.target.value})
  }
  onChangeDescription = (e) => {
    e.preventDefault()
    this.setState({description:e.target.value})
    console.log(this.state)
  }
  onChangeImage = (e) => {
    e.preventDefault()
    this.setState({image:e.target.value})
  }

  handleSave = (e) => {
    e.preventDefault()
      const fd = new FormData()
      fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
      fd.append('description', this.state.description)
      fd.append('name', this.state.name)
      fd.append('price', this.state.price)
      this.props.addProduct(fd)
      for (var p of fd) {
        console.log(p);
      }
    this.setState({name:'',image:'',price:'',description:'',redirect:true})
  }

  redirect() {
      if(this.state.redirect === true)
        return <Redirect to="/admin/products"/>
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.setState({name:'',image:'',price:'',description:''})
    //move to products because using Link does not work correctly
    this.props.history.push('/admin/products')
  }

  handleSelectedFile = (e) => {
      this.setState({selectedFile:e.target.files[0]})
  }

  render() {
    if(this.props.isLoading === false) {
      return (
            <div className="container">
                <form>
                  <div className="input-field col s5">
                    <input onChange={this.onChangeName} value={this.state.name} id="addProductName" type="text"/>
                    <label htmlFor="addProductName">Name</label>
                  </div>
                  <div className="input-field col s5">
                    <input onChange={this.onChangePrice} value={this.state.price} id="addProductPrice" type="text"/>
                    <label htmlFor="addProductPrice">Price</label>
                  </div>
                  <div className="input-field col s5">
                    <input type="file" id="addProductImage" onChange={this.handleSelectedFile}/>
                  </div>
                  <div className="input-field col s5">
                    <textarea onChange={this.onChangeDescription} value={this.state.description} id="addProductDescription" type="text"/>
                    <label htmlFor="addProductDescription">Description</label>
                    <label className="red-text">{this.state.errorName}</label>
                  </div>
                  <button onClick={ this.handleSave } id="addProductSave" className="btn btn-large waves-effect waves-light hoverable blue"><span className="white-text">Save</span></button>
                  <button onClick={ this.handleCancel } id="addProductCancel" className="btn btn-large waves-effect white hoverable black-text">Cancel</button>
                </form>
                {this.redirect()}
              </div>
            )
          }
          else {
            return (
              <div className="container">
                <h6>Loading ...</h6>
              </div>
            )
          }
        }
      }


export default AddProduct
