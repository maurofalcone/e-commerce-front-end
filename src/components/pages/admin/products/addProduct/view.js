import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import { Redirect } from 'react-router-dom'
import isEmpty from 'is-empty'
import './style.css'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: '',
      selectedFile:'',
      redirect:false,
      errorName:'',
      errorFile:'',
      errorPrice:'',
      errorDescription:''
    }
  }

  validate = () => {
    if(isEmpty(this.state.name)) {
      this.setState({errorName:'name cannot be blank'})
      return false
    }
    if(isEmpty(this.state.price) || this.state.price < 0) {
      this.setState({errorPrice:'price is not valid'})
      return false
    }
    if(isEmpty(this.state.selectedFile)) {
      this.setState({errorFile:'please selected an image'})
      return false
    }
    if(isEmpty(this.state.description)) {
      this.setState({errorDescription:'please enter a description'})
      return false
    }
    return true
  }

  clearForm = () => {
    this.setState({name:'',image:'',price:'',description:''})
  }

  clearError = () => {
    this.setState({errorName:'', errorFile:'', errorPrice:'', errorDescription:''})
  }

  onChangeName = (e) => {
    e.preventDefault()
    this.setState({name:e.target.value})
    this.clearError()
  }
  onChangePrice = (e) => {
    e.preventDefault()
    this.setState({price:e.target.value})
    this.clearError()
  }
  onChangeDescription = (e) => {
    e.preventDefault()
    this.setState({description:e.target.value})
    this.clearError()
  }
  onChangeImage = (e) => {
    e.preventDefault()
    this.setState({image:e.target.value})
    this.clearError()
  }

  handleSave = (e) => {
    e.preventDefault()
    if(this.validate()) {
        const fd = new FormData()
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        fd.append('description', this.state.description)
        fd.append('name', this.state.name)
        fd.append('price', this.state.price)
        this.props.addProduct(fd)
        this.clearForm()
        this.setState({redirect:true})
    }
  }

  redirect() {
      if(this.state.redirect)
        return <Redirect to="/admin/products"/>
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.setState({name:'',image:'',price:'',description:''}, this.props.history.push('/admin/products'))
  }

  handleSelectedFile = (e) => {
      this.setState({selectedFile:e.target.files[0]})
  }

  render() {
    if(this.props.error) {
      return (
        <div className="container">
          <p>{this.props.error}</p>
        </div>
      )
    }
    else {
      if(!this.props.isLoading) {
        return (
          <div className="container">
            <form>
              <div className="input-field col s5">
                <input onChange={this.onChangeName} value={this.state.name} id="addProductName" type="text"/>
                <label htmlFor="addProductName">Name</label>
              </div>
              <div>
                <label className="red-text">{this.state.errorName}</label>
              </div>
               <div className="input-field col s5">
                <input onChange={this.onChangePrice} value={this.state.price} id="addProductPrice" type="text"/>
                <label htmlFor="addProductPrice">Price</label>
              </div>
              <div>
                <label className="red-text">{this.state.errorPrice}</label>
              </div>
              <div className="input-field col s5">
                <input type="file" onChange={this.handleSelectedFile} id="addProductImage"/>
              </div>
              <div>
                <label className="red-text">{this.state.errorFile}</label>
              </div>
              <div className="input-field col s5">
                <textarea onChange={this.onChangeDescription} value={this.state.description} id="addProductDescription" type="text"/>
                <label htmlFor="addProductDescription">Description</label>
              </div>
              <div>
                <label className="red-text">{this.state.errorDescription}</label>
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
              <h6>Loading</h6>
              <ReactLoading type="spinningBubbles" color="black" height={'5%'} width={'5%'}></ReactLoading>
          </div>
        )
      }
    }
  }
}

export default AddProduct
