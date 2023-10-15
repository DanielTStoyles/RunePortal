/** @format */

import React, { useContext, useState } from "react";
import SideBar from "../components/SideBarComp";
import AuthContext from "../context/AuthContext";
import GeChart from "./GeChart";

const GeComponent = () => {
  const { user } = useContext(AuthContext);
  const [itemName, setItemName] = useState("");
  const [itemData, setItemData] = useState(null);
  const [timeSeriesData, setTimeSeriesData] = useState("");

  const handleSubmit = async () => {
    const nameToUppercase =
      itemName.charAt(0).toUpperCase() + itemName.slice(1);
    setItemName(nameToUppercase);

    try {
      const repsonse = await fetch("/api/item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemName: nameToUppercase }),
      });
      if (!repsonse.ok) {
        console.log("error occured");
      }
      const data = await repsonse.json();
      console.log(data);
      setItemData(data.highLowData);
      setTimeSeriesData(data.timeSeriesData.data);
    } catch (error) {
      console.error("error during fetch", error);
    }
  };

  let displayData = null;

  if (itemData) {
    const firstKey = Object.keys(itemData.data)[0];

    displayData = (
      <div className="relative text-white">
        <p>High Price: {itemData.data[firstKey].high}</p>
        <p>Low Price: {itemData.data[firstKey].low}</p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-center 
    bg-top bg-repeat-y px-4 py-8 sm:px-6 lg:px-8 bg-black overflow-y-hidden
    bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg2.jpg)] items-center"
    >
      <div className="mb-4">
        <h1 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          Grand Exchange Tool
        </h1>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-4 text-white">Search Items</h2>
        <input
          type="text"
          value={itemName}
          onChange={(e) => {
            const newValue = e.target.value;
            setItemName(newValue);
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

      <div className="relative text-white">
        {displayData ? displayData : <h5>Price Data to be displayed here</h5>}
      </div>

      <div className=" w-1/3 h-96">
        {itemData && itemName && timeSeriesData ? (
          <GeChart
            high={itemData.high}
            low={itemData.low}
            title={itemName}
            timeSeries={timeSeriesData}
          />
        ) : (
          <p className="text-white">
            No data available. Please enter an item name above and press search.
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
