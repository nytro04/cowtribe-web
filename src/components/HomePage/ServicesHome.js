import React, { Component } from "react";

import RotateCard from "./RotateCard";

class ServicesHome extends Component {
  state = {
    card1: {
      name1: "Mini Plans",
      details1: [
        "premium vaccine",
        "flexible payment terms",
        "regular visits",
        "dedicated vet"
      ],
      price1: 299,
      cardClass: {},
      number1: 1
    },
    card2: {
      name2: "Maxi Plans",
      details2: [
        "premium vaccine",
        "flexible payment terms",
        "regular visits",
        "dedicated vet"
      ],
      price2: 499,
      cardClass2: {},
      number2: 2
    },
    card3: {
      name3: "Custom Plans",
      details3: [
        "premium vaccine",
        "flexible payment terms",
        "regular visits",
        "dedicated vet"
      ],
      price3: 699,
      cardClass3: {},
      number3: 3
    }
  };

  render() {
    const { name1, details1, price1, number1, cardClass1 } = this.state.card1;
    const { name2, details2, price2, number2, cardClass2 } = this.state.card2;
    const { name3, details3, price3, number3, cardClass3 } = this.state.card3;

    return (
      <div className="services">
        <div className="container py-4 text-center">
          <h2 className="secondary-heading py-2 mb-5">Our Services</h2>

          <div className="row mb-5">
            <RotateCard
              name={name1}
              details={details1}
              price={price1}
              cardClass={cardClass1}
              number={number1}
            />
            <RotateCard
              name={name2}
              details={details2}
              price={price2}
              cardClass={cardClass2}
              number={number2}
            />
            <RotateCard
              name={name3}
              details={details3}
              price={price3}
              cardClass={cardClass3}
              number={number3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesHome;
