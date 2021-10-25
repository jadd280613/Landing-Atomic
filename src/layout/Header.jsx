import React from "react";
import logo from '../assets/logo.webp';

export const Header = () => {
  return (
    <div className="container pt-2 pb-4">
      <div className="row">
        <div className="col-12">
          <img
            src={logo}
            className="img-fluid pointer"
            width="200"
            height="200"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};
