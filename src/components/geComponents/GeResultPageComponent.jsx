/** @format */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GeResultsComponent from "./GeResultsComponent";

const GeResultPageComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedInputValue = inputValue.trim().replace(/\s+/g, "_");
    const isResultsPage = location.pathname.startsWith('/results/'); // Check if the current path is the results page

    if (isResultsPage) {
      window.location.href = `/results/${formattedInputValue}`;
    } else {
      navigate(`/results/${formattedInputValue}`);
    }
  };

  return (
    <div className=" flex flex-col items-start w-full pl-16">
      {/* Subtitle/Search label */}
      <h1 className="text-stone-300 text-xl md:text-3xl font-bold mb-[24px] text-center">
        Search Item
      </h1>

      {/* Search bar and button */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col md:flex-row items-center gap-[24px]"
      >
        {/* Input field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Item Name..."
          className="flex-grow bg-neutral-700 text-stone-300 text-xl font-normal focus:outline-none rounded-lg border border-zinc-700 px-4 py-2 w-full"
        />

        {/* Search button */}
        <button
          type="submit"
          className="h-[46px] bg-rp-buttonNormal hover:bg-rp-buttonHover rounded-lg px-6 flex items-center justify-center w-full md:w-auto"
        >
          <span className="text-zinc-200 text-base font-bold items-center">Search</span>
        </button>
      </form>

      <GeResultsComponent />
    </div>
  );
};

export default GeResultPageComponent;
