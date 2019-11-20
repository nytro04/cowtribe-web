import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar />

        <div className="header__content">
          <h1 className="header__content--hero">
            Animal health delivered to the last mile farmer
          </h1>
          <div className="header__content--button">
            <Link className="button button--green" to="/blog">
              Learn More →
            </Link>
            <Link className="button button--ghost" to="/contact">
              How it works →
            </Link>
          </div>
        </div>
        {/* <Jumbotron /> */}
      </header>
    );
  }
}

export default Header;
