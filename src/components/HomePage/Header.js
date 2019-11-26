import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import vetImg from "../../assets/21362864.jpg";

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar />

        <div className="row">
          <div className="col-md-6 header__left">
            <h1 className="display-3">
              Animal health delivered to the last mile farmer
            </h1>
            <Link className="button button--green mt-5" to="/contact">
              call us now →
            </Link>
          </div>
          <div className="col-md-6">
            <img src={vetImg} alt="vet" className="img-fluid" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
