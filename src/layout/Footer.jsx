import React from "react";
import Icon1 from "../assets/linkedin.png";
import Icon2 from "../assets/twitter.png";

export const Footer = () => {
  return (
    <div className="footer">
        <div className="row align-items-center" style={{ height: '10vh' }}>
          <div className="col-8">
            <p className="text-footer">© 2020 AtomicLabs. Todos los derechos reservados. </p>
          </div>
          <div className="col-4 text-left d-flex justify-content-around">
            <a href="">Aviso de privacidad</a>
            <img
              src={Icon1}
              className="img-fluid"
              width="20"
              height="20"
              alt="..."
            />
            <img
              src={Icon2}
              className="img-fluid"
              width="20"
              height="20"
              alt="..."
            />
          </div>
        </div>
      </div>
  );
};
