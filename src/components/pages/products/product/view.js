import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:this.props.name,
      description:this.props.description,
      price:this.props.price,
      image:this.props.image
    }
  }

  render() {
    return (
      <div className="col s4">
        <div className="card" id="productCard">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" id="productImage" src={`/static/${this.props.image}`} alt=""/>
            </div>
            <div className="card-content">
              <span className="card-title activator text-darken-4">{this.state.name}<i className="material-icons right">more_vert</i></span>
              <p>
                <i className="material-icons tiny">attach_money</i><span>{this.state.price}</span>
                <Link to="/"><i className="material-icons right">add_shopping_cart</i></Link>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Description<i className="material-icons right">close</i></span>
              <p id="card-reveal-description">{this.state.description}</p>
            </div>
        </div>
      </div>
    )
  }
}
export default Product
