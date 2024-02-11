/** @format */

import React from "react";

const WatchlistItem = ({ itemName, price, change }) => (
  <div className="flex flex-row justify-between items-start p-[16px] border-b border-[#28272A]">
    <span className="text-[18px] leading-[21px] text-[#E5E4E7] font-normal">
      {itemName}
    </span>
    <div className="text-right">
      <span className="text-white text-[18px] leading-[21px]">{price}</span>
      <span className="text-[#40BF40] text-[14px] leading-[16px]">
        {change}
      </span>
    </div>
  </div>
);

const GeWatchlistProfileDisplay = () => {
  const items = [
    { name: "Abyssal Whip", price: "1.3 million", change: "+2,198" },
    // Add other items here
  ];

  return (
    <div className="relative w-[585px] h-[257px]">
      <div className="relative top-[44px] w-full h-[213px] bg-[#19181B] border border-[#28272A] rounded-[8px]">
        <div className="flex flex-col">
          {items.map((item, index) => (
            <WatchlistItem
              key={index}
              itemName={item.name}
              price={item.price}
              change={item.change}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 w-[182.43px] h-[28px]">
        <span className="text-[24px] leading-[28px] font-bold text-[#E5E4E7]">
          GE Watchlist
        </span>
      </div>

      <span className="absolute right-0 top-[5px] text-[16px] leading-[19px] underline text-[#D5D4D8]">
        View All
      </span>
    </div>
  );
};

export default GeWatchlistProfileDisplay;
