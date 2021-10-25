import React from "react";
import Img from "../assets/Group 4040.png";
import ArrowLeft from "../assets/arrow-right.svg";

export const Section4 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <img src={Img} className="img-fluid" alt="..." />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <h5 className="text-center">
            Contratacion <br /> remota
          </h5>
        </div>
        <div className="col-1 d-flex text-center align-items-center justify-content-center">
          <img
            src={ArrowLeft}
            width="50"
            height="50"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-2">
          <h5 className="text-center">
            Entrevista con <br /> el area de RH
          </h5>
        </div>
        <div className="col-1 d-flex text-center align-items-center justify-content-center">
          <img
            src={ArrowLeft}
            width="50"
            height="50"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-2">
          <h5 className="text-center">
            Prueba <br /> practica
          </h5>
        </div>
        <div className="col-1 d-flex text-center align-items-center justify-content-center">
          <img
            src={ArrowLeft}
            width="50"
            height="50"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-2">
          <h5 className="text-center">
            Entrevista <br /> tecnica
          </h5>
        </div>
        <div className="col-1 d-flex text-center align-items-center justify-content-center">
          <img
            src={ArrowLeft}
            width="50"
            height="50"
            className="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-12 text-center">
          <button type="button" class="btn btn-primary">
            ¡Quiero ser parte!
          </button>
        </div>
      </div>
    </div>
  );
};
