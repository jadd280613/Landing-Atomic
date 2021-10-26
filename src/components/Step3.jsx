import React, { useState } from 'react';
import IconNumber2 from '../assets/Group 4015@2x.png';

export const Step3 = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 d-flex align-items-center '>
          <img src={IconNumber2} className='img-fluid' width='60' height='60' />
          <h2 style={{ fontSize: '3.4vw', marginLeft: '40px' }}>
            <b>
              CODIGO DE <span>VERIFICACION</span>
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
              Te enviamos un SMS al numero: <br />
              +52 656 158 6086 <br />
              Ingresa el codigo de verificacion:
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <form>
              <div className='mb-3'>
                <label className='form-label'>Codigo de verificacion</label>
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
        <div className='row'>
          <p style={{ fontSize: '1.5vw', fontWeight: 'lighter' }}>
            {' '}
            ¿No recibiste el codigo? <b>Reenviar codigo</b>{' '}
          </p>
          <div className='col-12'></div>
        </div>
      </div>
    </div>
  );
};
