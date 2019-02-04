import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CategorieList from "./pages/categories/view"
import Landing from "./layout/landing/view"
import Login from "./auth/login/view"
import Navbar from "./layout/navbar/view"
import ProductList from "./pages/products/view"
import Register from "./auth/register/view"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/products" component={ProductList}/>
          <Route exact path="/categories" component={CategorieList}/>
        </div>
      </Router>
    )
  }
}
export default App
