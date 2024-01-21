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
    <div className="flex justify-start w-full pl-[140px] my-10">
      <div className="w-[400px] px-[26px]">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="text-zinc-400 text-4xl font-bold font-['Arial'] mb-8">
            Grand Exchange
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex-grow h-10 px-[26px] py-0.5 bg-neutral-800 rounded-3xl border border-neutral-700 flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type item name here..."
                className="flex-grow px-2 py-1 rounded-3xl bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></input>
            </div>
            <button
              type="submit"
              className="w-24 h-10 px-4 py-2 bg-zinc-600 rounded-3xl text-white text-xl font-normal font-['Arial']"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeSearchComponent;
