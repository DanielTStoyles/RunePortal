import React, { useState } from 'react';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './register';

const FormContainer = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleToggleForm = () => {
    setShowRegisterForm(prevState => !prevState);
  };

  return (
    <div>
      {showRegisterForm ? (
        <RegisterForm handleToggleForm={handleToggleForm} />
      ) : (
        <LoginForm handleToggleForm={handleToggleForm} />
      )}
      <button onClick={handleToggleForm}>
        {showRegisterForm ? 'Go to Login' : 'Go to Register'}
      </button>
    </div>
  );
};

export default FormContainer;




