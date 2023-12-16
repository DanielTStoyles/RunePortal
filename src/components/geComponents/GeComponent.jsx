/** @format */

import React, { useContext, useState } from "react";
import SideBar from "../Nav Components/SideBarComp";
import AuthContext from "../../context/AuthContext";
import GeChart from "./GeChart";
import { useQuery } from "react-query";
import NavBarComponent from "../Nav Components/TopNavBarComponent";

const fetchItemData = async (itemName) => {
  const response = await fetch("/api/item", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemName }),
  });
  if (!response.ok) {
    console.log("error occured");
  }
  const data = await response.json();
  console.log(data, "this is line 19 log");
  return data;
};

const GeComponent = () => {
  const { user } = useContext(AuthContext);
  const [itemName, setItemName] = useState("");
  const [query, setQuery] = useState(null);

  const {
    data: itemData,
    isError,
    isLoading,
  } = useQuery("item", () => fetchItemData(query), { enabled: !!query });

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameToUppercase =
      itemName.charAt(0).toUpperCase() + itemName.slice(1);
    setQuery(nameToUppercase);
  };

  let displayData = null;

  if (isLoading) {
    return <p>Loading data...</p>; // Display a loading message
  }

  if (isError) {
    return <p>Error fetching data. Please try again later.</p>; // Display an error message
  }

  if (itemData) {
    const highLowData = itemData.highLow.data;
    const firstKey = Object.keys(highLowData)[0];
    const highValue = highLowData[firstKey].high;
    const lowValue = highLowData[firstKey].low;

    displayData = (
      <div className="relative text-white">
        <p>High Price: {highValue} gp</p>
        <p>Low Price: {lowValue} gp</p>
      </div>
    );
  }

  return (
    <div className="flex w-full bg-runeportal-darkpurple">
      <SideBar user={user} />

      <div className="flex flex-col w-full">
        <NavBarComponent pageName="Grand Exchange" />

        <div className="flex flex-col items-center gap-4 flex-grow min-h-screen bg-runeportal-darkpurple">
          <div className="text-5xl font-arial text-white">Grand Exchange</div>

          <form
            onSubmit={handleSubmit}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
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
          </form>
          <div>
            <h5>{displayData}</h5>
          </div>
          <div className=" w-2/3 h-2/3">
            {itemData && itemName && itemData?.timeSeries?.data ? (
              <GeChart
                high={itemData.high}
                low={itemData.low}
                title={itemName}
                timeSeries={itemData.timeSeries.data}
              />
            ) : (
              <p className="flex text-white items-center justify-center">
                No data available. Please enter an item name above and press
                search.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeComponent;
