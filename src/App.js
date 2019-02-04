import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layout/navbar/view"
import Landing from "./components/layout/landing/view"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    )
  }
}
export default App
