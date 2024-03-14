/** @format */

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import error404 from "../../images/eror404.png";
import AuthContext from "../../context/AuthContext";

const NotFoundComponent = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const home = () => {
    navigate("/home");
  };

  return (
    <div className="w-[715px] h-[498px] flex-col justify-center items-center gap-10 inline-flex">
      <div>
        <img src={error404} alt="Error 404"></img>
      </div>
      <div className="text-zinc-200 text-5xl font-bold font-['Arial']">
        Oops! Something Went Wrong.
      </div>
      <div className="text-zinc-200 text-4xl font-bold font-['Arial']">
        The page you’re looking for doesn’t exist!
      </div>
      <div className="px-6 py-3 bg-purple-900 rounded-lg justify-center items-center gap-1 inline-flex">
        <button
          className="text-zinc-200 text-base font-bold font-['Arial']"
          onClick={home}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundComponent;
