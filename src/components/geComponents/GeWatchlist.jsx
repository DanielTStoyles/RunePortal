/** @format */

import React, { useContext } from "react";
import SideBar from "../navComponents/SideBarComp";
import AuthContext from "../../context/AuthContext";
import NavBarComponent from "../navComponents/TopNavBarComponent";
import GeSearchBar from "./GeSearchComponent";

const WatchlistItem = ({
  itemName,
  currentPrice,
  priceChange,
  percentChange,
}) => {
  return (
    <div className="bg-[#1F1F1F] border border-[#53358D] rounded-lg p-4 text-white">
      <h3 className="font-bold">{itemName}</h3>
      <p className="text-lg">{currentPrice}</p>
      <p
        className={`text-sm ${
          priceChange > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {priceChange} ({percentChange}%)
      </p>
    </div>
  );
};

const GeWatchlistComponent = () => {
  const items = [
    {
      itemName: "Abyssal Whip",
      currentPrice: "$1,371,513",
      priceChange: "-$8,512",
      percentChange: "-5%",
    },
    // ... add more items as needed
  ];

  return (
    <div className="flex h-screen bg-runeportal-darkpurple">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <NavBarComponent pageName="GE Watchlist" />
        <div className=" flex-grow overflow-auto p-8">
          <div className="flex mb-6 justify-center">
            <GeSearchBar />
          </div>
          <div className="flex text-white text-3xl mb-6 justify-center items-center">
            <p>GE Watchlist</p>
          </div>

          <div className=" text-white text-xl mb-4">My Watchlist</div>

          <div className="flex gap-4">
            {/* Watchlist items */}
            {items.map((item, index) => (
              <WatchlistItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeWatchlistComponent;
