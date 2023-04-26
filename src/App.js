import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterForm from './register';
import LoginForm from './LoginForm.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [ setShowRegisterForm] = useState(false);

  const handleToggleForm = () => {
    setShowRegisterForm(prevState => !prevState);
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm handleToggleForm={handleToggleForm} />}
        />
        <Route
          path="/register"
          element={<RegisterForm handleToggleForm={handleToggleForm} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 