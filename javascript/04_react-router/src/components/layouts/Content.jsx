import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "../../pages/Home"
import Param from "../../pages/Param"
import About from "../../pages/About"
import NotFound from "../../pages/NotFound"

import "./Content.css"

function Content(props) {
  return (
    <div className="Content col-9">
      <Switch>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
