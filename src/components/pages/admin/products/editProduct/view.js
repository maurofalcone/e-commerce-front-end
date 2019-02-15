import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import "./style.css"

class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      description: '',
      price: '',
      selectedFile:'',
      redirect:false
    }
  }

  componentWillMount() {
    console.log(this.props.match.params.id)
    this.props.getProductById(this.props.match.params.id)
  }

  componentDidMount() {
      this.props.products.map(item => {
        return this.setState({ id:item.id,name:item.name,description:item.description,price:item.price })
      })
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
  }

  handleSave = (e) => {
    e.preventDefault()
    if(this.state.selectedFile !== undefined) {
      const fd = new FormData()
      fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
      fd.append('description', this.state.description)
      fd.append('name', this.state.name)
      fd.append('price', this.state.price)
      fd.append('id', this.props.match.params.id)
      for (var p of fd) {
        console.log('form data',p);
      }
      this.props.editProduct(fd)
      this.setState({redirect:true})
    }
    else {
      console.log('error, need to load a file')
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
    this.setState({selectedFile:e.target.files[0]})
  }

  render() {
    if(this.props.isLoading === false) {
        return (
              <div className="container">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field col s5">
                      <input onChange={this.onChangeName} value={this.state.name} id="editProductName" type="text"/>
                      <label className="active" htmlFor="editProductName">Name</label>
                    </div>
                    <div className="input-field col s5">
                      <input type="file" id="editProductImage" onChange={this.handleSelectedFile}/>
                    </div>
                    <div className="input-field col s5">
                      <input onClick={console.log(this.state)} onChange={this.onChangePrice} value={this.state.price} id="editProductPrice" type="text"/>
                      <label className="active" htmlFor="editProductPrice">Price</label>
                    </div>
                    <div className="input-field col s5">
                      <textarea onChange={this.onChangeDescription} value={this.state.description} id="editProductDescription" type="text"/>
                      <label className="active" htmlFor="editProductDescription">Description</label>
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
                  <h6>Loading ...</h6>
                </div>
              )
            }
          }
      }


export default EditProduct
