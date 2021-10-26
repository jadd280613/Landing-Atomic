import React, { useState } from 'react';
import IconNumber1 from '../assets/Group 4014@2x.png';

export const Step1 = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 d-flex align-items-center '>
          <img src={IconNumber1} className='img-fluid' width='80' height='80' />
          <h2 style={{ fontSize: '3.4vw', marginLeft: '40px' }}>
            <b>
              TE QUEREMOS <span>CONOCER</span>
            </b>
          </h2>
        </div>
        <div className='row'>
          <div
            className='col-12'
            style={{ fontSize: '1.5vw', margin: '40px 0px' }}
          >
            <p>
              Queremos saber que eres tu, por favor ingresa los siguientes
              datos:
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <form>
              <div class='mb-3'>
                <label for='inputName' class='form-label'>
                  Nombre (s)
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='inputName'
                  aria-describedby='nameHelp'
                  onChange={props.handleChangeName}
                />
                <div id='nameHelp' class='form-text' style={{ color: 'red', fontWeight: 'lighter' }}>
                  El nombre debera de tener minimo 5 caracteres
                </div>
              </div>
              <div class='mb-3'>
                <label for='inputApellidos' class='form-label'>
                  Apellidos
                </label>
                <input
                  type='password'
                  class='form-control'
                  id='inputApellidos'
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
