import React, { useState } from 'react';
import IconNumber1 from '../assets/Group 4014@2x.png';

export const Step1 = (props) => {
  console.log(props.fullName.name.length);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 d-flex align-items-center'>
          <img src={IconNumber1} className='img-fluid' width='60' height='60' />
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
              <div className='mb-3'>
                <label className='form-label'>Nombre (s)</label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  onChange={props.handleChangeName}
                />
                {props.fullName.name.length >= 1 &&
                props.fullName.name.length < 5 ? (
                  <div
                    className='form-text'
                    style={{ color: 'red', fontWeight: 'lighter' }}
                  >
                    El nombre debera de tener minimo 5 caracteres
                  </div>
                ) : null}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Apellidos</label>
                <input
                  type='text'
                  name='lastName'
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
