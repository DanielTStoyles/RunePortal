/** @format */

const ProfileWatchlist = () => {
  return (
    <div className="w-[519px] h-[310px] relative">
      <div className="w-[519px] h-[266px] left-0 top-[44px] absolute bg-neutral-800 rounded-lg border border-zinc-800 flex-col justify-start items-start inline-flex">
        <div className="self-stretch px-6 py-4 border border-zinc-800 justify-between items-center inline-flex">
          <div>
            <span className="text-zinc-200 text-lg font-normal font-['Arial']">
              Abyssal Whip price{" "}
            </span>
            <span className="text-red-600 text-lg font-normal font-['Arial']">
              dropped 5%{" "}
            </span>
            <span className="text-stone-300 text-lg font-normal font-['Arial']">
              ($8512)
            </span>
          </div>
          <div className="text-zinc-500 text-sm font-normal font-['Arial']">
            24:00
          </div>
        </div>
        <div className="self-stretch px-6 py-4 border border-zinc-800 justify-between items-start inline-flex">
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            Abyssal Whip
          </div>
          <div className="h-[39px] flex-col justify-between items-end inline-flex">
            <div className="text-white text-lg font-normal font-['Arial']">
              1.3 million
            </div>
            <div className="text-green-500 text-sm font-normal font-['Arial']">
              +2,198
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-4 border border-zinc-800 justify-between items-start inline-flex">
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            Item Name
          </div>
          <div className="h-[39px] flex-col justify-between items-end inline-flex">
            <div className="text-white text-lg font-normal font-['Arial']">
              Price
            </div>
            <div className="text-green-500 text-sm font-normal font-['Arial']">
              +Change
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-4 border border-zinc-800 justify-between items-start inline-flex">
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            Item Name
          </div>
          <div className="h-[39px] flex-col justify-between items-end inline-flex">
            <div className="text-white text-lg font-normal font-['Arial']">
              Price
            </div>
            <div className="text-red-600 text-sm font-normal font-['Arial']">
              - Change
            </div>
          </div>
        </div>
      </div>
      <div className="w-[519px] h-7 left-0 top-0 absolute justify-between items-center inline-flex">
        <div className="w-[256.43px] h-7 justify-start items-center gap-2.5 flex">
          <div className="text-zinc-200 text-2xl font-bold font-['Arial']">
            GE Watchlist Alerts
          </div>
        </div>
        <div className="text-zinc-300 text-base font-normal font-['Inter'] underline">
          View All
        </div>
      </div>
    </div>
  );
};

export default ProfileWatchlist;
