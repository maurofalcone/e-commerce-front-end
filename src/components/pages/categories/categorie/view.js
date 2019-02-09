import React, { Component } from "react"
//import { Link } from "react-router-dom"

class Categorie extends Component {
  constructor() {
    super()
    this.state = {
      name:"Categorie name",
      icon:"shopping_cart"
    }
  }
  render() {
    return (
      <div className="col s4">
        <div className="card" style={{height:"100%",width:"70vw"}}>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.state.name}<i className="material-icons right">{this.state.icon}</i></span>
            </div>
        </div>
      </div>
    )
  }
}
export default Categorie
