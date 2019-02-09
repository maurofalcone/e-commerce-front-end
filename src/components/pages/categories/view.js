import React, { Component } from "react"
import Categorie from "./categorie/view"

class CategorieList extends Component {

  getCategories = () => {
    return <Categorie/>
  }

  render() {
    return (
      <div style={{ height: "75vh" }} className="container halign-wrapper">
        <div className="column">
          {this.getCategories()}
        </div>
      </div>
    )
  }
}
export default CategorieList
