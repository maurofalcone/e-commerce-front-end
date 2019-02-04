import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layout/navbar/view"
import Landing from "./components/layout/landing/view"
import Register from "./components/auth/register/view"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    )
  }
}
export default App
