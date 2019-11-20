import React, { Component } from "react";
import HowCards from "../Utils/HowCards";
import stepOne from "../../assets/cowtribe-step1.png";
import stepTwo from "../../assets/cowtribe-step2.png";
import stepThree from "../../assets/cowtribe-step3.png";

class AboutSection extends Component {
  state = {
    heading: {
      headingOne: "A Farmer Subscribes on Phone",
      headingTwo: "We Manage all Schedules",
      headingThree: "We Deliver the Right Service"
    },
    text: {
      textOne:
        "Farmer subscribes for our service using his/her mobile phone. We collect the relevant information about the farmer and his/her animals to help us better  understand his needs.",
      textTwo:
        "We use the farmer’s information to create a schedule that’s tailored to the his/her exact needs. And then we manage all schedules and send him reminders when his animals are due for care.",
      textThree:
        "We coordinate the provider side,  managing all aspects of the service, obsessing over every detail to ensure that a qualified Vet comes to deliver the right treatment to his animals."
    }
  };
  render() {
    return (
      <div className="container py-4">
        <div className="text-center">
          <h2 className="secondary-heading py-4">How Cowtribe Works</h2>

          <div className="row">
            <HowCards
              imgName={stepOne}
              heading={this.state.heading.headingOne}
              text={this.state.text.textOne}
            />
            <HowCards
              imgName={stepTwo}
              heading={this.state.heading.headingTwo}
              text={this.state.text.textTwo}
            />
            <HowCards
              imgName={stepThree}
              heading={this.state.heading.headingThree}
              text={this.state.text.textThree}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
