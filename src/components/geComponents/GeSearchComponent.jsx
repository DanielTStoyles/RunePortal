/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GeSearchComponent = ({ isResultsPage }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedInputValue = inputValue.replace(/\s+/g, "_");

    if (isResultsPage) {
      window.location.href = `/results/${formattedInputValue}`;
    } else {
      navigate(`/results/${formattedInputValue}`);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h2 className="mb-4 text-white">Search Items</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type item name here..."
          className="px-2 py-1 mb-4 w-full rounded-md"
        ></input>

        <button
          onClick={handleSubmit}
          className=" items-center px-3 py-2 text-xlg font-medium text-center text-white 
bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GeSearchComponent;
