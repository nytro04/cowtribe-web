import React, { Component } from "react";
import vetImg from "../../assets/19171560.jpg";
import { Link } from "react-router-dom";

class AboutUs extends Component {
  render() {
    return (
      <div className="about">
        <div className="container py-4 text-center">
          <h2 className="secondary-heading py-2">About Us</h2>
          <p className="mar-bs text-center">
            Our mission is to deliver life-saving animal vaccines and other
            services where they are needed most and our pioneering innovation
            makes it possible rain or shine and cheaply!
          </p>

          <div className="row">
            <div className="col-md-6">
              <img src={vetImg} alt="Vet" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3 className="tertiary-heading py-1">Our Tribe</h3>
              <p className="text-center m-2 pt-1 pb-4">
                Driving to the veterinary office, waiting on long queues,
                chasing supplies all week—today’s veterinary service is a pain
                when it shouldn’t be.
              </p>
              <p className="text-center m-2 pt-1 pb-2">
                At Cowtribe, we are pioneering innovation makes last mile
                delivery possible rain or shine. And we do it cheaply! Our
                system allows us to track the health statistics of each animal,
                reminds the farmer when it is time for his animals to receive
                vaccines, and then facilitate all the logistics and supply
                processes to reliably deliver these vaccines to the farmer.
              </p>
              <Link className="button button--green mt-4">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
