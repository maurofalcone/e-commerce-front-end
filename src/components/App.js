import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CategorieList from "./pages/categories/view"
import Landing from "./layout/landing/view"
import Login from "./auth/login/view"
import Navbar from "./layout/navbar/view"
import ProductList from "./pages/products"
import Register from "./auth/register/view"
import AdminProductList from "./pages/admin/products"
import AddProduct from "./pages/admin/products/addProduct"
import EditProduct from "./pages/admin/products/editProduct"
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/products" component={ProductList}/>
          <Route exact path="/categories" component={CategorieList}/>
          <Route exact path="/admin/products" component={AdminProductList}/>
          <Route exact path="/admin/products/add/" component={AddProduct}/>
          <Route exact path="/admin/products/edit/:id" component={EditProduct}/>
        </div>
      </Router>
    )
  }
}
export default App
