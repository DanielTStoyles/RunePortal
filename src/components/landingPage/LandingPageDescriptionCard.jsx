/** @format */

import React from "react";

const LandingPageCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-[628px] h-[148px] p-6 bg-neutral-800 rounded-lg border border-zinc-800 justify-start items-start gap-6 inline-flex">
      <div className="w-[100px] h-[100px] justify-center items-center flex">
        <div className="w-[100px] h-[100px] relative flex-col justify-start items-start flex">
          <div className="w-[100px] h-[100px] bg-zinc-500 rounded-full" />
          <div className="text-white text-lg font-normal font-['Arial']">
            {imageUrl}
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-6 inline-flex">
        <div className="text-zinc-200 text-2xl font-normal font-['Arial']">
          {title}
        </div>
        <div className="text-zinc-400 text-base font-normal font-['Arial']">
          {description}
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
