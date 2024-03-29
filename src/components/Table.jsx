import React from "react";
import IconCheck from "../assets/ic_check_tiny.png";

export const Table = () => {
  return (
    <div className="container">
      <div className="row card-table">
        <div className="col-12">
          <div className="row">
            <div className="col-6 border-right">
              <h2 className="title-header"> <b>CARACTERISTICAS</b> </h2>
            </div>
            <div className="col-3 border-right text-center">
              <h2 className="title-header"> <b>OTROS</b> </h2>
            </div>
            <div className="col-3 text-center">
              <h2 className="title-header"> <b style={{ fontSize: '1.5em' }} >ATOMIC</b> </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 border-right border-bottom d-flex align-items-center col-table">
              <p className="description">
                Equipo inclusivo, honesto y autentico
              </p>
            </div>
            <div className="col-3 border-right border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
            <div className="col-3 border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
          </div>
          <div className="row">
            <div className="col-6 border-right col-table border-bottom">
              <p className="description">
                Puntualidad es nuestro segundo nombre
              </p>
            </div>
            <div className="col-3 border-right border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
            <div className="col-3 border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
          </div>
          <div className="row">
            <div className="col-6 border-right col-table border-bottom">
              <p className="description">
                Siempre Innovamos es nuestros productos
              </p>
            </div>
            <div className="col-3 border-right border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
            <div className="col-3 border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
          </div>
          <div className="row">
            <div className="col-6 border-right col-table border-bottom">
              <p className="description">
                Te ayudamos a crecer e implementar nuevos conocimientos
              </p>
            </div>
            <div className="col-3 border-right border-bottom text-center d-flex align-items-center justify-content-center">
            </div>
            <div className="col-3 border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
          </div>
          <div className="row">
            <div className="col-6 border-right col-table border-bottom">
              <p className="description">
                Nos preocupamos por tu bienestar
              </p>
            </div>
            <div className="col-3 border-right border-bottom text-center d-flex align-items-center justify-content-center">
            </div>
            <div className="col-3 border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
          </div>
          <div className="row">
            <div className="col-6 border-right col-table ">
              <p className="description" >
                El respeto es una parte fundamental
              </p>
            </div>
            <div className="col-3 border-right border-bottom text-center d-flex align-items-center justify-content-center">
            </div>
            <div className="col-3 border-bottom text-center d-flex align-items-center justify-content-center">
              <img
                src={IconCheck}
                className="img-fluid"
                width="30"
                height="30"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
