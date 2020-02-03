import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/cowtribe-small-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
        <Link className="navbar-brand ml-4" to="/">
          <img className="img-fluid logo mr-2" src={logo} alt="Cowtribe logo" />
          Cowtribe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#cowtribe"
          aria-controls="cowtribe"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="cowtribe">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-4">
            <li className="nav-item mr-4">
              <Link className="nav-link active" to="/about">
                home
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link " to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/services">
                services
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/impact-project">
                blog
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="button button--green" to="/contact">
                Request a Demo →
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
