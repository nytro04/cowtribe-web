import React from "react";

const HowCards = ({ imgName, heading, text, step }) => {
  return (
    <div className="col-lg-4 col-md-4 py-4 card__how">
      <h2>{step}</h2>
      <img
        src={imgName}
        alt="Step Image"
        className="img-fluid card__how--img"
      />
      <div className="text-center">
        <h4 className="card__how--header">{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HowCards;
