import React from "react";

const HowCards = ({ imgName, heading, text, step }) => {
  return (
    <div className="col-lg-4 col-md-4 py-4 card__how">
      <div className="step step__mb">{step}</div>
      <img src={imgName} alt="Steps" className="img-fluid card__how--img" />
      <div className="text-center">
        <h4 className="card__how--header">{heading}</h4>
        <p className="text-muted">{text}</p>
      </div>
    </div>
  );
};

export default HowCards;
