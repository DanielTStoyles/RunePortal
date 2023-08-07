/** @format */

import { useLocation } from "react-router-dom";

const UsePageName = () => {
  const location = useLocation();
  const pathname = location.pathname;

  switch (pathname) {
    case "/":
      return "Home";
    case "/GeComponent":
      return "Grand Exchange";
    case "/Triumphs":
      return "Triumphs";
    default:
      return "";
  }
};

export default UsePageName;
