import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid bg-dark">
          <Link className="navbar-brand text-light" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/business">business</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/entertainment">entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/health">health</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/science">science</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/sports">sports</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/technology">technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
