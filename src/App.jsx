/** @format */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route exact path="/*" element={<Registerlog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
