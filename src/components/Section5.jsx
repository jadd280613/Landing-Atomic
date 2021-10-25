import React from "react";
import Img1 from "../assets/Group 4041.png";
import Img2 from "../assets/Group 4042.png";
import Img3 from "../assets/Group 4043.png";
import IconCheck from "../assets/ic_check_tiny.png";
import { Table } from "./Table";

export const Section5 = () => {
  return (
    <>
      <div className="container pt-5" style={{ marginBottom: '300px' }}>
        <div className="row">
          <div className="col-12 text-center">
            <h2 style={{ fontSize: '3em', fontWeight: 'bold' }}>
              ¿POR QUE <span className='text-color-orange'>ATOMIC?</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid container-radius">
        <div className="row">
          <div className="col-12 text-center">
            <div className="container container-images">
              <div className="row">
                <div className="col-4 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img src={Img3} className="img-fluid" />
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-2 text-right">
                          <img
                            src={IconCheck}
                            className="img-fluid"
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="col-10 text-left">
                          <p>
                            Usamos las tecnologias <br /> mas modernas
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2 text-right">
                          <img
                            src={IconCheck}
                            className="img-fluid"
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="col-10 text-left">
                          <p>
                            Innovamos y creamos <br /> proyectos retadores
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img src={Img3} className="img-fluid" />
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-2 text-right">
                          <img
                            src={IconCheck}
                            className="img-fluid"
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="col-10 text-left">
                          <p>
                            ¡Trabajamos en equipo <br /> rumbo al exito!
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2 text-right">
                          <img
                            src={IconCheck}
                            className="img-fluid"
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="col-10 text-left">
                          <p>
                            No tenemos coidgo de <br /> vestimenta
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img src={Img3} className="img-fluid" />
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-2 text-right">
                          <img
                            src={IconCheck}
                            className="img-fluid"
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="col-10 text-left">
                          <p>
                            Realizamos actividades <br /> para tu bienestar.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2 text-right">
                          <img
                            src={IconCheck}
                            className="img-fluid"
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="col-10 text-left">
                          <p>
                            ¡Tenemos un parque <br /> frente a la oficina!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table />
        <div className="row pt-5">
        <div className="col-12 text-center">
          <button type="button" class="btn btn-primary">
            ¡Quiero ser parte!
          </button>
        </div>
      </div>
      </div>
    </>
  );
};
