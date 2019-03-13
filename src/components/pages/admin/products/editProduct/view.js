import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading'
import isEmpty from 'is-empty'
import './style.css'

class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      description: '',
      price: '',
      errorName:'',
      errorFile:'',
      errorPrice:'',
      errorDescription:'',
      selectedFile:null,
      redirect:false
    }
    this.inputFile = React.createRef()
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

  componentDidMount() {
    this.props.getProductById(this.props.match.params.id)
  }

  componentWillReceiveProps() {
      this.props.products.map(item => {
        return this.setState({ id:item.id,name:item.name,description:item.description,price:item.price })
      })
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

  handleSave = (e) => {
    e.preventDefault()
    if(this.validate()) {
      const fd = new FormData()
      fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
      fd.append('description', this.state.description)
      fd.append('name', this.state.name)
      fd.append('price', this.state.price)
      fd.append('id', this.props.match.params.id)
      this.props.editProduct(fd)
      this.clearForm()
      this.setState({redirect:true})
    }
  }

  redirect() {
      if(this.state.redirect === true)
        return <Redirect to="/admin/products"/>
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.setState({name:'',selectedFile:'',price:'',description:''})
    this.setState({redirect:true})
  }

  handleSelectedFile = (e) => {
    e.preventDefault()
    this.clearError()
    this.setState({selectedFile:e.target.files[0], image:e.target.value})
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
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s5">
                <input onChange={this.onChangeName} value={this.state.name} id="editProductName" type="text"/>
                <label className="active" htmlFor="editProductName">Name</label>
              </div>
              <div>
                <label className="red-text">{this.state.errorName}</label>
              </div>
              <div className="input-field col s5">
                <input type="file" id="editProductImage" onChange={this.handleSelectedFile}/>
              </div>
              <div>
                <label className="red-text">{this.state.errorFile}</label>
              </div>
              <div className="input-field col s5">
                <input onChange={this.onChangePrice} value={this.state.price} id="editProductPrice" type="text"/>
                <label className="active" htmlFor="editProductPrice">Price</label>
              </div>
              <div>
                <label className="red-text">{this.state.errorPrice}</label>
              </div>
              <div className="input-field col s5">
                <textarea onChange={this.onChangeDescription} value={this.state.description} id="editProductDescription" type="text"/>
                <label className="active" htmlFor="editProductDescription">Description</label>
              </div>
              <div>
                <label className="red-text">{this.state.errorDescription}</label>
              </div>
              <button onClick={ this.handleSave } id="editProductSave" className="btn btn-large waves-effect waves-light hoverable blue"><span className="white-text">Save</span></button>
              <button onClick={ this.handleCancel } id="editProductCancel" className="btn btn-large waves-effect white hoverable black-text">Cancel</button>
            </form>
            {this.redirect()}
          </div>
        )
      }
      else {
        return (
          <div className="container">
            <h6>Loading</h6> <ReactLoading type="spinningBubbles" color="black" height={'5%'} width={'5%'}></ReactLoading>
          </div>
        )
      }
    }
  }
}

export default EditProduct
