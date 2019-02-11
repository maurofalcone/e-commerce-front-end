import React, { Component } from "react"
import "./style.css"

class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      description: '',
      price: ''
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getProductById(this.props.match.params.id)
  }

  componentWillReceiveProps() {
    this.props.products.map(item => {
        this.setState({ id:item.id,name:item.name,description:item.description,price:item.price })
    })
    console.log(this.state);
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
  onChangeImage = (e) => {
    e.preventDefault()
    this.setState({image:e.target.value})
  }

  handleSave = (e) => {
    e.preventDefault()
    const product = {
      id:this.state.id,
      name:this.state.name,
      price:this.state.price,
      description:this.state.description
    }
    this.props.editProduct(product)
    this.setState({name:'',image:'',price:'',description:''})
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.setState({name:'',image:'',price:'',description:''})
    //move to products because using Link does not work correctly
    this.props.history.push('/admin/products')
  }

  render() {
    if(this.props.isLoading === false) {
      console.log('product encontrado', this.props.products)
      return (
            <div className="container">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s5">
                    <input onChange={this.onChangeName} value={this.state.name} id="editProductName" type="text"/>
                    <label className="active" htmlFor="editProductName">Name</label>
                  </div>
                  <div className="input-field col s5">
                    <input onChange={this.onChangePrice} value={this.state.price} id="editProductPrice" type="text"/>
                    <label className="active" htmlFor="editProductPrice">Price</label>
                  </div>
                  <div className="input-field col s5">
                    <textarea onChange={this.onChangeDescription} value={this.state.description} id="editProductDescription" type="text"/>
                    <label className="active" htmlFor="editProductDescription">Description</label>
                  </div>
                  <button onClick={ this.handleSave } id="editProductSave" className="btn btn-large waves-effect waves-light hoverable blue"><span className="white-text">Save</span></button>
                  <button onClick={ this.handleCancel } id="editProductCancel" className="btn btn-large waves-effect white hoverable black-text">Cancel</button>
                </form>
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
