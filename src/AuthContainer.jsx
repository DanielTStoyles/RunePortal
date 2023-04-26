import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './register';

function AuthContainer() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      {isRegistering ? (
        <RegisterForm onToggleForm={handleToggleForm} />
      ) : (
        <LoginForm onToggleForm={handleToggleForm} />
      )}
    </div>
  );
}

export default AuthContainer;
