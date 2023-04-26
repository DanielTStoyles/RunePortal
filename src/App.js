import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterForm from './register';
import LoginForm from './LoginForm.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
// const isLoggedIn=useContext(UserContext);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm  />}
        />
        <Route
          path="/register"
          element={<RegisterForm  />}
        />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 

