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

  return (
    <div className="flex justify-center items-center w-full h-screen">
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
