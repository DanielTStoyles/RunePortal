/** @format */

import React from "react";

const LandingPageCard = ({ title, description, imageUrl }) => {
  return (
    <div className="box-border flex flex-row items-start p-[24px] gap-[24px] w-[632px] h-[148px] bg-[#1F1F1F] border border-[#53358D] rounded-[8px]">
      <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex-none order-0 rounded-full overflow-hidden">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start gap-[24px] w-[281px] flex-none order-1">
        <div className="font-arial text-[24px] leading-[28px] text-white flex-none order-0">
          {title}
        </div>
        <div className="font-arial text-[16px] leading-[18px] text-[#CCCCCC] flex-none order-1">
          {description}
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
