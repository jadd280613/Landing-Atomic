import React, { useState } from 'react';
import { Step1 } from '../components/Step1';
import ImgStep1 from '../assets/Group 4033.png';

export const Solicitud = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validateOk, setValidateOk] = useState(true);
  const [fullName, setFullName] = useState({
    name: '',
    lastName: '',
  });

  const handleChangeName = (event) => {
    const { name, value } = event.target;
    setFullName({
      [name]: value,
    });
  };
  return (
    <div className='container bg-solicitud' style={{ height: '100vh' }}>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col-3' style={{ color: 'white' }}>
              25
            </div>
            <div className='col-3' style={{ color: 'white' }}>
              50
            </div>
            <div className='col-3' style={{ color: 'white' }}>
              75
            </div>
            <div className='col-3' style={{ color: 'white' }}>
              100
            </div>
          </div>
        </div>
        <div className='col-4'></div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col-12'>
              <div className='progress' style={{ borderRadius: '50px' }}>
                <div
                  className='progress-bar w-25 background-color-orange'
                  role='progressbar'
                  aria-valuenow='25'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>
          <div className='row' style={{ paddingTop: '80px' }}>
            <div className='col-12'>
              <Step1 
                handleChangeName={handleChangeName}
                currentStep={currentStep}
                fullName={fullName}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-8'></div>
            <div className='col-4'>
              <button className='btn btn-form' disabled={validateOk}>
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div className='col-4 text-center'>
          <img src={ImgStep1} className='img-fluid' />
        </div>
      </div>
    </div>
  );
};
