/** @format */

import React from "react";

const HomePage = () => {
  const logout = async () => {
    await fetch("http://localhost:5174/logout", {
      method: "POST",
    });
    window.location.href = "/login";
  };
  return (
    <div
      className="min-h-screen bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg2.jpg)] 
          bg-repeat-y bg-center bg-top mx-auto 
          overflow-y-hidden px-012 flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div>
        <button
          onClick={logout}
          className="group relative w-full flex justify-center py-2 px-4 
              border border-lime-400 text-md font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 
              focus:outline-none focus:ring-2 focus:ring-lime-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
