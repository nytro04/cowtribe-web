import React from "react";

const Footer = () => {
  return (
    <div className="footer py-2">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span> Cowtribe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
