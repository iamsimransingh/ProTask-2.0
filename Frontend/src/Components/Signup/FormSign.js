import React, { useState } from 'react';
import Formlogin from './Formlogin';
import './FormSign.css';
import Signup from './FormSignup2';
import FormSuccess from './FormSuccess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <header>
  <h1>ProTask</h1>
      </header>
      <img className='form-img' src='img/img-2.png' alt='protasklogo' />
        </div>
        {!isSubmitted ? (
          <Signup  />
        ) : (
          <FormSuccess />
        )} 
      </div>
    
  );
};

export default Form;