import React from "react";
import { Header } from "../layout/Header";
import Group4032 from "../assets/Group 4032.png";
import IconArrow from "../assets/Group 4013.png";

export const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 justify-content-center align-items-center">
            <img
              src={Group4032}
              width="500"
              height="500"
              className="img-fluid ml-5"
            />
          </div>
          <div className="col-6 align-self-center text-center">
            <h1 className="text-justify text-banner">
              Desarrolla todo <br />
              <span className="text-color-orange">
                tu POTENCIAL
              </span>
              <br />
              <span style={{ fontSize: ".85em" }}>dentro del equipo</span>
              <br />
              <div style={{ fontSize: '1.1em' }}>
              <span className="text-color-orange">
                ATOMIC
              </span>
              <span>LABS</span>
              </div>
            </h1>
            <button type="button" class="btn btn-primary">
              ¡Quiero ser parte!
            </button>
          </div>
        </div>
        <div className="row justify-content-center pt-5">
          <div className="col-12 text-center">
            <img src={IconArrow} className="img-fluid" />
          </div>
          <div className="col-12 text-center">
            <p>Quiero saber mas</p>
          </div>
        </div>
      </div>
    </div>
  );
};
