import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Formlogin from './Formlogin';
import './FormSign.css';
import FormSuccess from './FormSuccess';
const Formlog = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <header>
          <h1>ProTask</h1>
      </header>
      <img className='form-img' src='img/img-2.png' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <Formlogin  />
        ) : (
          <FormSuccess />
        )} 
      </div>
    </>
  );
};

export default Formlog;