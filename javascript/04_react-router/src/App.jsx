//EXTERNAL MODULES
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

//EXTERNAL COMPONENTS
import Menu from "./components/layouts/Menu"
import Content from "./components/layouts/Content"

//COMPONENT STYLE
import "./App.css"

//BEGIN COMPONENT

function App() {
  return (
    <div className="App container">
      <div className="row">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </div>
  )
}

export default App
