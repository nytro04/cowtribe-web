import React, { Component } from "react";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import ServicesHome from "./ServicesHome";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <HowItWorks />
        <AboutUs />
        <ServicesHome />
        <Contact />
      </div>
    );
  }
}

export default Home;
