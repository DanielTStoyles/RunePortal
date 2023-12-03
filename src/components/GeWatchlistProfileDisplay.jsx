/** @format */

import React from "react";
// Import the Stats_icon.png if you're using it in your project
// import StatsIcon from './path-to/Stats_icon.png';

const GeWatchlistProfileDisplay = () => {
  return (
    <div className="absolute left-[832px] top-[750px] w-[585px] h-[257px]">
      <div className="absolute top-[44px] w-[585px] h-[213px] bg-[#19181B] border border-[#28272A] rounded-[8px]">
        <div className="flex flex-col items-start p-0">
          <div className="flex flex-row items-start p-[16px] gap-[349px] border border-[#28272A]">
            <span className="text-[18px] leading-[21px] text-[#E5E4E7] font-normal">
              Abyssal Whip
            </span>
            <div className="flex flex-col justify-between items-end w-[82px] h-[39px]">
              <span className="text-white text-[18px] leading-[21px]">
                1.3 million
              </span>
              <span className="text-[#40BF40] text-[14px] leading-[16px]">
                +2,198
              </span>
            </div>
          </div>

          {/* Repeat the structure for other items */}
        </div>
      </div>

      <div className="absolute top-0 w-[182.43px] h-[28px]">
        <div className="flex flex-col items-start p-0 gap-[10px]">
          <span className="absolute left-[34.43px] text-[24px] leading-[28px] font-bold text-[#E5E4E7]">
            GE Watchlist
          </span>
          {/* Uncomment if using the image */}
          {/* <img src={StatsIcon} alt="Stats Icon" className="absolute w-[26.09px] h-[24px]" /> */}
        </div>
      </div>

      <span className="absolute left-[525px] top-[5px] text-[16px] leading-[19px] underline text-[#D5D4D8]">
        View All
      </span>
    </div>
  );
};

export default GeWatchlistProfileDisplay;
