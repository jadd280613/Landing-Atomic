import React from "react";
import ImgCard1 from "../assets/Group 4035.png";
import ImgCard2 from "../assets/Group 4036.png";
import ImgCard3 from "../assets/Group 4037.png";

export const Section3 = () => {
  return (
    <div className="container pb-4">
      <div className="row text-center">
        <div className="col-4 d-flex text-center align-items-center justify-content-center">
          <div className="card card1 text-center align-items-center">
            <div className="text-center">
              <img src={ImgCard1} width="180" height="180" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">EXPLORA</h5>
              <p className="card-text">
                <ul>
                  <li>
                    Innovacion y <b>creacion <br/> tecnologica</b>
                  </li>
                  <li>
                    <b>UI/UX</b>
                  </li>
                  <li>
                    <b>Innovacion</b>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card card-center text-center align-items-center background-color-orange">
            <div className="text-center">
              <img src={ImgCard2} width="210" height="210" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title card-title-center">IMAGINA</h5>
              <p className="card-text card-text-center">
                <ul>
                  <li>
                    Estrategia <b>Digital</b>
                  </li>
                  <li>
                    Big Data & <b>Analysis</b>
                  </li>
                  <li>
                    <b>Consultoria</b> Tecnologica
                  </li>
                  <li>
                    <b>Reduccion</b> de costos TI
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex text-center align-items-center justify-content-center">
          <div className="card card2 text-center align-items-center">
            <div className="text-center">
              <img src={ImgCard3} width="180" height="180" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">CONQUISTA</h5>
              <p className="card-text">
                <ul>
                  <li>
                    Desarrollo tecnologico <br /> <b>a la medida</b>
                  </li>
                  <li>
                    <b>Ciberseguridad</b>
                  </li>
                  <li>
                    <b>Servicios en la nube</b>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
