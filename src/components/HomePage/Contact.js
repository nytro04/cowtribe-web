import React, { Component } from "react";
import logo from "../../assets/cowtribe-small-logo.png";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="contact py-4">
        <div className="container text-center text-white">
          <h2 className="secondary-heading text-white">Contact Us</h2>
          <div className="row">
            <div className="col-md-6 py-5">
              <h3 className="mb-4 text-white">We love to hear from you</h3>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <Link className="button button--white mt-4">Submit</Link>
              </form>
            </div>
            <div className="col-md-6 contact__address text-white py-5">
              <h3 className="mb-4 text-white">Contact Info</h3>
              <p>
                <i className="fas fa-map-marker-alt mr-3 text-white"></i>
                2nd Floor Yamusah Plaza 212 Water Works Road, Tamale Ghana
              </p>
              <Link to="mailto:">
                <i className="fas fa-envelope mr-3 mb-2"></i>
                info@34.226.239.221
              </Link>
              <p>
                <i className="fas fa-phone mr-3"></i>
                +233203905658
              </p>

              <div className="contact__icons pt-4">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter mr-3  contact__icons--twitter"></i>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram mr-3  contact__icons--instagram"></i>{" "}
                </a>
                <a
                  href="https://gh.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin contact__icons--facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
