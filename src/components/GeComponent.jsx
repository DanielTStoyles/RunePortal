/** @format */

import React, { useContext } from "react";
import SideBar from "../components/SideBarComp";
import AuthContext from "../context/AuthContext";

const GeComponent = () => {
  const { user } = useContext(AuthContext);
  // const { searchTerm } = console.log("yeah");
  // const handleSearchChange = console.log("yeayea");

  return (
    <div
      className="flex min-h-screen bg-center 
    bg-top bg-repeat-y px-4 py-8 sm:px-6 lg:px-8 bg-black overflow-y-hidden
    bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg2.jpg)] justify-center items-center"
    >
      <div className="flex-1 flex justify-center absolute top-12">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Grand Exchange Tool
        </h1>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center absolute">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <h2 className="mb-4 text-white">Search Items</h2>
          <input
            // type="text"
            // value={searchTerm}
            // onChange={handleSearchChange}
            placeholder="Type item name here..."
            className="px-2 py-1 mb-4 w-full rounded-md"
          ></input>
          <button
            // onClick={searchFunctionHere}
            className=" items-center px-3 py-2 text-xlg font-medium text-center text-white 
            bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <SideBar user={user} />
      </div>
    </div>
  );
};

export default GeComponent;
