/** @format */

import React, { useContext, useState, useEffect } from "react";
import SideBar from "../components/SideBarComp";
import AuthContext from "../context/AuthContext";
import GeChart from "./GeChart";

const GeComponent = () => {
  const { user } = useContext(AuthContext);
  const [itemData, setItemData] = useState(null);
  const [itemName, setItemName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [timeSeriesData, setTimeSeriesData] = useState([]);

  const handleSubmit = () => {
    const nameToUppercase =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setItemName(nameToUppercase);
  };

  useEffect(() => {
    if (itemName !== "") {
      const fetchItemData = async (itemName) => {
        const data = await getItemByName(itemName);
        const { highLow, timeSeries } = data;
        console.log(timeSeries);
        if (highLow && timeSeries) {
          setItemData(highLow);
          setTimeSeriesData(timeSeries);
          console.log(highLow, "data log");
        } else {
          console.log("item not found");
        }
      };

      fetchItemData(itemName);
    }
  }, [itemName]);

  return (
    <div
      className="flex min-h-screen bg-center 
    bg-top bg-repeat-y px-4 py-8 sm:px-6 lg:px-8 bg-black overflow-y-hidden
    bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg2.jpg)] justify-center items-center"
    >
      <div className="mb-4">
        <h1 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Grand Exchange Tool
        </h1>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h2 className="mb-4 text-white">Search Items</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            const newValue = e.target.value;
            setInputValue(newValue);
          }}
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
      </div>
      <div className="relative">
        <p>
          {itemData
            ? `High Price: ${itemData.high} gp, Low Price: ${itemData.low} gp`
            : " "}
        </p>
        {itemData && itemName && timeSeriesData ? (
          <GeChart
            high={itemData.high}
            low={itemData.low}
            title={itemName}
            timeSeries={timeSeriesData}
          />
        ) : (
          <p className="text-white">
            No data available. Please enter an item name and press search.
          </p>
        )}
      </div>
      <div>
        <SideBar user={user} />
      </div>
    </div>
  );
};

export default GeComponent;
