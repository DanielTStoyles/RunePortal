import React from 'react';
import ReactDOM from "react-dom";
import CssBaseline from '@mui/material/CssBaseline';
import RegisterForm from './register'
import LoginForm from './LoginForm.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Routes>
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
