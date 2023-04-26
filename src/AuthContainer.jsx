import React, { useState } from 'react';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './register';

const FormContainer = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div>
      {showRegisterForm ? (
        <RegisterForm  />
      ) : (
        <LoginForm  />
      )}
      <button onClick={() => setShowRegisterForm (!showRegisterForm)}>
        {showRegisterForm ? 'Go to Login' : 'Go to Register'}
      </button>
    </div>
  );
};

export default FormContainer;

