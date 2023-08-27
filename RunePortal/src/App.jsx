/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
