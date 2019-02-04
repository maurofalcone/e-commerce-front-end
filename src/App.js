import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Landing from "./components/layout/landing/view"
import Login from "./components/auth/login/view"
import Navbar from "./components/layout/navbar/view"
import ProductList from "./components/pages/products/view"
import Register from "./components/auth/register/view"

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
        </div>
      </Router>
    )
  }
}
export default App
