/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GeSearchComponent = ({ isResultsPage }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedInputValue = inputValue.trim().replace(/\s+/g, "_");

    if (isResultsPage) {
      window.location.href = `/results/${formattedInputValue}`;
    } else {
      navigate(`/results/${formattedInputValue}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Title */}
      <h1 className="text-zinc-200 text-2xl md:text-4xl font-bold mb-4 text-center">
        Find Item Prices on the Grand Exchange
      </h1>

      {/* Subtitle/Search label */}
      <h2 className="text-stone-300 text-xl md:text-3xl font-bold mb-4 text-center">
        Search Item
      </h2>

      {/* Search bar and button */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col md:flex-row items-center gap-3"
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
          className="h-10 bg-rp-buttonNormal hover:bg-rp-buttonHover rounded-lg px-6 py-2 flex items-center justify-center w-full md:w-auto"
        >
          <span className="text-zinc-200 text-base font-bold">Search</span>
        </button>
      </form>
    </div>
  );
};

export default GeSearchComponent;
