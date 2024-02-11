/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GeChart from "./GeChart";
import { useQuery } from "react-query";

const apiBaseUrl = import.meta.env.VITE_APP_API;

const fetchItemData = async (itemName) => {
  const response = await fetch(`${apiBaseUrl}/item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemName }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  return response.json();
};

const GeResultsComponent = () => {
  const { itemName: urlItemName } = useParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const formattedItemName = urlItemName.replace(/_/g, " ");
    setQuery(formattedItemName);
  }, [urlItemName]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const chartTitle = capitalizeFirstLetter(query);

  const {
    data: itemData,
    isError,
    isLoading,
  } = useQuery("item", () => fetchItemData(query), { enabled: !!query });

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (isError) {
    return <p>Error fetching data. Please try again later.</p>;
  }

  let highValue = null;
  let lowValue = null;
  let currentPrice = null;

  if (itemData) {
    const highLowData = itemData.highLow.data;
    const firstKey = Object.keys(highLowData)[0];
    highValue = highLowData[firstKey].high;
    lowValue = highLowData[firstKey].low;
  }

  if (highValue && lowValue) {
    currentPrice = (highValue + lowValue) / 2;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex justify-center items-center gap-4 mb-4">
        <div className="px-6 py-4 bg-neutral-800 rounded-lg flex justify-start items-start gap-2.5">
          <div className="text-stone-300 text-xl font-normal font-['Arial']">
            Current Price:
          </div>
          <div className="text-zinc-200 text-xl font-normal font-['Arial']">
            {currentPrice} gp
          </div>
        </div>
        <div className="px-6 py-4 bg-neutral-800 rounded-lg flex justify-start items-start gap-2.5">
          <div className="text-stone-300 text-xl font-normal font-['Arial']">
            High:
          </div>
          <div className="text-zinc-200 text-xl font-normal font-['Arial']">
            {highValue} gp
          </div>
        </div>
        <div className="px-6 py-4 bg-neutral-800 rounded-lg flex justify-start items-start gap-2.5">
          <div className="text-stone-300 text-xl font-normal font-['Arial']">
            Low:
          </div>
          <div className="text-zinc-200 text-xl font-normal font-['Arial']">
            {lowValue} gp
          </div>
        </div>
        <div className="w-[269px] h-[55px] px-6 py-4 bg-neutral-800 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="relative">
            <div className="left-0 top-0 absolute text-stone-300 text-xl font-normal font-['Arial']">
              Change:
            </div>
            <div className="left-[92px] top-0 absolute text-zinc-200 text-xl font-normal font-['Arial']">
              ▲▼
            </div>
            <div className="left-[148px] top-0 absolute text-zinc-200 text-xl font-normal font-['Arial']">
              999.99b
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 min-h-[80vh]">
        {itemData && itemData?.timeSeries?.data ? (
          <GeChart
            high={itemData.high}
            low={itemData.low}
            title={chartTitle}
            timeSeries={itemData.timeSeries.data}
          />
        ) : (
          <p className="flex text-white items-center justify-center">
            No data available. Please enter an item name above and press search.
          </p>
        )}
      </div>
    </div>
  );
};

export default GeResultsComponent;
