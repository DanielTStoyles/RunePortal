import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialUIExample from './components/MaterialUIExample';
import HelloWorld from './components/HelloWorld';
import StateExample from './components/StateExample';
import FlipFlop from './containers/FlipFlop';

const RunePortal = () => {
  return (
    /**
     * BrowserRouter is a component that wraps the Routes component.
     */
    <BrowserRouter>
      <Routes>
          {/* 
            The Route component is used to define a route.
            The path prop is used to define the path of the route.
            The element prop is used to define the component that will be rendered when the route is matched.
          */}
          <Route path="/" element={<HelloWorld />}/>
          <Route path="/material-ui" element={<MaterialUIExample />}/>
          <Route path="/deep-state" element={<StateExample />}/>
          <Route path='/flipflop' element={<FlipFlop />}/>
      </Routes>
    </BrowserRouter>
  );
}

/**
 * The createRoot method is used to create a root element. 
 * The root element is used to render the React application.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
      The RunePortal component is the root component of the application.
    */}
    <RunePortal />
  </React.StrictMode>
);
