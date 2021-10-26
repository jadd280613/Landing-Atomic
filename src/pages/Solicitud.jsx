import React, { useEffect, useState } from 'react';

import ImgStep1 from '../assets/Group 4033.png';
import ImgStep2_3 from '../assets/Group 4034.png';
import ImgStep4 from '../assets/Group 4038.png';
import IconNumber1 from '../assets/Group 4014.png';
import IconNumber2 from '../assets/Group 4023.png';
import IconNumber3 from '../assets/Group 4024.png';
import IconNumber4 from '../assets/Group 4025.png';

import NumberDisable2 from '../assets/Group 4019.png';
import NumberDisable3 from '../assets/Group 4017.png';
import NumberDisable4 from '../assets/Group 4018.png';

import IconBlock from '../assets/ic_lock_24px@2x.png';
import IconCheck from '../assets/Group 4016.png';

import { Step1 } from '../components/Step1';
import { Step2 } from '../components/Step2';
import { Step3 } from '../components/Step3';
import { Step4 } from '../components/Step4';

export const Solicitud = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validateOk, setValidateOk] = useState(true);
  const [validateNumber, setValidateNumber] = useState(true);
  const [validateCode, setValidateCode] = useState(true);
  const [fullName, setFullName] = useState({
    name: '',
    lastName: '',
  });
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [progessBar, setProgessBar] = useState('25');
  const handleInputChangeName = (event) => {
    setFullName({
      ...fullName,
      [event.target.name]: event.target.value,
    });
  };
  const submit = () => {
    setCurrentStep(currentStep + 1);
    setFullName({
      name: '',
      lastName: '',
    });
    setPhone('');
    setCode('');
    if (progessBar === '25') {
      setProgessBar('45');
    }
    if (progessBar === '45') {
      setProgessBar('60');
    }
    if (progessBar === '60') {
      setProgessBar('75');
    }
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
    if (progessBar === '75') {
      setProgessBar('60');
    }
    if (progessBar === '60') {
      setProgessBar('45');
    }
    if (progessBar === '45') {
      setProgessBar('25');
    }
  };

  const handleInputChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleInputChangeCode = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    if (fullName.name.length > 4) {
      setValidateOk(false);
    } else {
      setValidateOk(true);
    }
  }, [fullName.name]);
  useEffect(() => {
    if (phone.length === 10) {
      setValidateNumber(false);
    } else {
      setValidateNumber(true);
    }
  }, [phone]);
  useEffect(() => {
    if (code.length === 6) {
      setValidateCode(false);
    } else {
      setValidateCode(true);
    }
  }, [code]);

  return (
    <div className='container-solicitud bg-solicitud' style={{ height: '85vh' }}>
      <div className='row align-items-center'>
        <div className='col-9'>
          <div className='row mb-4'>
            <div className='col-2' style={{ color: 'white' }}></div>
            <div className='col-2 text-center' style={{ color: 'white' }}>
              {currentStep > 1 ? (
                <img src={IconCheck} width='40px' />
              ) : (
                <img src={IconNumber1} width='40px' />
              )}
            </div>
            <div
              className='col-2 text-center'
              style={{ color: 'white', textAlign: 'right' }}
            >
              {currentStep === 1 ? (
                <img src={NumberDisable2} width='40px' />
              ) : currentStep > 2 ? (
                <img src={IconCheck} width='40px' />
              ) : (
                <img src={IconNumber2} width='40px' />
              )}
            </div>
            <div className='col-2 text-center' style={{ color: 'white' }}>
              {currentStep < 3 ? (
                <img src={NumberDisable3} width='40px' />
              ) : currentStep >= 4 ? (
                <img src={IconCheck} width='40px' />
              ) : (
                <img src={IconNumber3} width='40px' />
              )}
            </div>
            <div className='col-2 text-center' style={{ color: 'white' }}>
              {currentStep < 4 ? (
                <img src={NumberDisable4} width='40px' />
              ) : currentStep > 4 ? (
                <img src={IconCheck} width='40px' />
              ) : (
                <img src={IconNumber4} width='40px' />
              )}
            </div>
            <div className='col-2' style={{ color: 'white' }}></div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-12'>
                  <div class='progress' style={{ borderRadius: '50px' }}>
                    <div
                      class='progress-bar background-color-orange'
                      role='progressbar'
                      style={{
                        width: `${progessBar}%`,
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                      }}
                      aria-valuenow={progessBar}
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
              {currentStep >= 2 ? (
                <div className='row mt-4'>
                  <div className='col-12'>
                    <span
                      style={{
                        fontSize: '1.3vw',
                        color: 'white',
                        fontWeight: 'lighter',
                        cursor: 'pointer'
                      }}
                      onClick={back}
                    >
                      &#60; Regresar
                    </span>
                  </div>
                </div>
              ) : null}
              <div className='row' style={{ paddingTop: '30px' }}>
                <div className='col-12'>
                  {currentStep === 1 ? (
                    <Step1
                      handleChangeName={handleInputChangeName}
                      currentStep={currentStep}
                      fullName={fullName}
                    />
                  ) : null}
                  {currentStep === 2 ? (
                    <Step2
                      handleChangeName={handleInputChangePhone}
                      currentStep={currentStep}
                      phone={phone}
                    />
                  ) : null}
                  {currentStep === 3 ? (
                    <Step3
                      handleChangeName={handleInputChangeCode}
                      currentStep={currentStep}
                      phone={code}
                    />
                  ) : null}
                  {currentStep === 4 ? <Step4 /> : null}
                </div>
              </div>
              <div className='row'>
                <div className='col-8'></div>
                <div className='col-4'>
                  {currentStep == 1 ? (
                    <button
                      className='btn btn-form'
                      disabled={validateOk}
                      onClick={submit}
                    >
                      Enviar
                    </button>
                  ) : null}
                  {currentStep == 2 ? (
                    <button
                      className='btn btn-form'
                      disabled={validateNumber}
                      onClick={submit}
                    >
                      Continuar
                    </button>
                  ) : null}
                  {currentStep == 3 ? (
                    <button
                      className='btn btn-form'
                      disabled={validateCode}
                      onClick={submit}
                    >
                      Validar codigo
                    </button>
                  ) : null}
                  {currentStep == 4 ? (
                    <button className='btn btn-form'>
                      Enviar
                      <img
                        src={IconBlock}
                        style={{ marginLeft: '30px' }}
                        width='25px'
                      />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-3'>
          {currentStep === 1 ? (
            <img src={ImgStep1} width='400' />
          ) : currentStep === 2 || currentStep === 3 ? (
            <img src={ImgStep2_3} width='500' height='600' />
          ) : (
            <img src={ImgStep4} width='400' />
          )}
        </div>
      </div>
    </div>
  );
};
