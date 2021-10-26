import React from "react";
import logo from '../assets/logo.webp';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  let history = useHistory();
  return (
    <div className="container pt-2 pb-4" style={{ zIndex: '99' }}>
      <div className="row">
        <div className="col-12">
          <img
            src={logo}
            className="img-fluid pointer"
            width="200"
            height="200"
            alt="Logo"
            onClick={() => history.push('/')}
          />
        </div>
      </div>
    </div>
  );
};
