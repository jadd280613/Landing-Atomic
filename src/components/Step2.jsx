import React, { useState } from 'react';
import IconNumber2 from '../assets/Group 4015@2x.png';

export const Step2 = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 d-flex align-items-center '>
          <img src={IconNumber2} className='img-fluid' width='60' height='60' />
          <h2 style={{ fontSize: '3.4vw', marginLeft: '40px' }}>
            <b>
              VALIDA TU <span>CELULAR</span>
            </b>
          </h2>
        </div>
        <div className='row'>
          <div
            className='col-12'
            style={{ fontSize: '1.5vw', margin: '40px 0px', fontWeight: 'lighter' }}
          >
            <p>
              Necesitamos validar tu numero para continuar <br />
              Ingresa tu numero a 10 digitos y te enviaremos un codigo SMS.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <form>
              <div className='mb-3'>
                <label className='form-label'>
                  Numero de celular
                </label>
                <input
                  type='number'
                  name='phone'
                  className='form-control'
                  onChange={props.handleChangeName}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
