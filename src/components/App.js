import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Landing from "./layout/landing"
import Login from "./auth/login"
import Navbar from "./layout/navbar"
import ProductList from "./pages/products"
import Register from "./auth/register/view"
import AdminProductList from "./pages/admin/products"
import AddProduct from "./pages/admin/products/addProduct"
import EditProduct from "./pages/admin/products/editProduct"
import PrivateAdminRoute from "../privateRoute/admin"
import NoMatch from "./utils/noMatch"
import Warning from "./utils/warning"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/products" component={ProductList}/>
            <PrivateAdminRoute exact path="/admin/products" component={AdminProductList}/>
            <PrivateAdminRoute exact path="/admin/products/add/" component={AddProduct}/>
            <PrivateAdminRoute exact path="/admin/products/edit/:id" component={EditProduct}/>
            <Route exact path="/warning" component={Warning}/>
            <Route path="*" component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
