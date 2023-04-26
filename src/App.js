import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterForm from './register'
import LoginForm from './LoginForm.jsx'
import AuthContainer from './AuthContainer.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        {/* <Route exact path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} /> */}
        <Route exact path="/" element={<AuthContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





