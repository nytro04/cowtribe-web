import React from "react";
import { Link } from "react-router-dom";

const RotateCard = ({ name, details, price, number }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="cus-card">
        <div className="cus-card__side cus-card__side--front">
          <div className={`cus-card__picture cus-card__picture--${number}`}>
            &nbsp;
          </div>
          <h4 className="cus-card__heading">
            <span
              className={`cus-card__heading-span cus-card__heading-span--${number}`}
            >
              {name}
            </span>
          </h4>
          <div className="cus-card__details">
            <ul>
              <li>{details[0]}</li>
              <li>{details[1]}</li>
              <li>{details[2]}</li>
              <li>{details[3]}</li>
            </ul>
          </div>
        </div>
        <div
          className={`cus-card__side cus-card__side--back cus-card__side--back-${number}`}
        >
          <div className="cus-card__cta">
            <div className="cus-card__price-box">
              <p className="cus-card__price-only">Only</p>
              <p className="cus-card__price-value">GHS {price}</p>
            </div>
            <Link to="#" className="button button--white">
              Book now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotateCard;
