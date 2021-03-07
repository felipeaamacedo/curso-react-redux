import React from "react"
import { Link } from "react-router-dom"

import "./Menu.css"

function Menu(props) {
  return (
    <div className=" Menu col-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Início
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/param/111" className="nav-link">
            Param #01
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/param/222" className="nav-link">
            Param #02
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            Sobre
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/naoExiste" className="nav-link">
            Não Existe
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
