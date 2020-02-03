import React, { Component } from "react";

import { Link } from "react-router-dom";
import vetImg from "../../assets/1.jpg";
import googleImg from "../../assets/google-play.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <h1 className="display-4  mt-5">
                Animal health delivered to the last mile farmer
              </h1>
              <div className="dis">
                <Link className="button button--green my-5 " to="/contact">
                  call us now →
                </Link>

                <div className="android">
                  <Link to="" className="mt-5">
                    <img src={googleImg} alt="android" className="img-fluid" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={vetImg} alt="vet" className="img-fluid" />
              {/* <div className="andriod mt-5">
                <Link to="" className="mt-5">
                  <img src={googleImg} alt="android" className="img-fluid" />
                </Link>
              </div> */}
              {/* <div className="header__button text-center my-3">
                <Link className="button button--green mb-5" to="/contact">
                  call us now →
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
