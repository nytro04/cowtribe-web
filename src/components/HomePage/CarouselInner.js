import React from "react";

const CarouselInner = ({ heading, text }) => {
  return (
    <div class="carousel-item carousel-image-1 active">
      <div class="container">
        <div class="carousel-caption d-none d-sm-block text-right mb-5">
          <h1 class="display-3">{heading}</h1>
          <p class="lead">{text}</p>
          {/* <a href="#" class="btn btn-info btn-lg">
            Sign Up Now
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CarouselInner;
