import React, { Component } from "react";
import Header from "./Header";
import AboutSection from "./AboutSection";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutSection />
      </div>
    );
  }
}

export default Home;
