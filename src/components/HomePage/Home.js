import React, { Component } from "react";
import Header from "./Header";
import AboutSection from "./AboutSection";
import ServicesHome from "./ServicesHome";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutSection />
        <ServicesHome />
      </div>
    );
  }
}

export default Home;
