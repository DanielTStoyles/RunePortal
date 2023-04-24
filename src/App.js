import React from 'react';
import ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import RegisterForm from './register'
import LoginForm from './LoginForm.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
