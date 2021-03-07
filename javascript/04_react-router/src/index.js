import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

// BEGIN BOOTSTRAP MODULES

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

// END BOOTSTRAP MODULES

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
