/** @format */

import React from "react";

const TransformedCard = ({
  title = "Track Your Progress",
  description = "For one or multiple accounts",
  imageUrl,
}) => {
  return (
    <div className="w-[410.67px] h-[260px] p-6 bg-progress-back rounded-lg border border-progress-brd flex-col justify-start items-center inline-flex">
      <div className="w-[100px] h-[100px] justify-center items-center inline-flex">
        <div className="w-[100px] h-[100px] relative flex-col justify-start items-start flex">
          {/* Make sure the background divs are also rounded */}
          <div className="w-[100px] h-[100px] absolute" />
          <div className="w-[100px] h-[100px] absolute mb-1" />
          <img
            src={imageUrl}
            alt="Description"
            className="w-[100px] h-[100px] relative" // Added object-cover and relative
          />
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-6 flex">
        <div className="self-stretch text-center text-zinc-200 text-2xl font-normal font-['Arial'] mt-2">
          {title}
        </div>
        <div className="self-stretch text-center text-zinc-400 text-base font-normal font-['Arial']">
          {description}
        </div>
      </div>
    </div>
  );
};

export default TransformedCard;
