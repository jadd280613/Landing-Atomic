import React, { useState } from 'react';
import IconNumber2 from '../assets/Group 4015@2x.png';

export const Step4 = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 d-flex align-items-center '>
          <img src={IconNumber2} className='img-fluid' width='60' height='60' />
          <h2 style={{ fontSize: '3.4vw', marginLeft: '40px' }}>
            <b>
              TERMINOS Y <span>CONDICIONES</span>
            </b>
          </h2>
        </div>
        <div className='row'>
          <div
            className='col-12'
            style={{
              fontSize: '1.5vw',
              margin: '40px 0px',
              fontWeight: 'lighter',
            }}
          >
            <p>
              Por favor revisa nuestros terminos y condiciones para este
              servicio: <br />
              <span href=''>
                <b style={{ fontSize: '1.3vw', color: 'white', textDecoration: 'underline' }}>Consulta Terminos y condiciones</b>
              </span>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
              />
                <p style={{ fontSize: '1vw' ,  fontWeight: 'lighter' }}>Acepto los Termino y Condiciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
