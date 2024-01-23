/** @format */

const AdventureLogProfileDisplay = () => {
  return (
    <div className="w-[519px] h-[374.09px] flex-col justify-center items-center gap-4 inline-flex">
      <div className="w-[518.79px] h-[29.09px] justify-start items-center gap-2.5 inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="text-zinc-200 text-2xl font-bold font-['Arial']">
            Adventure Log
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-neutral-700 flex-col justify-start items-start flex">
        <div className="h-[99px] p-4 bg-zinc-800 border border-neutral-700 flex-col justify-start items-start gap-2 flex">
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            Task Name
          </div>
          <div className="text-zinc-500 text-xs font-normal font-['Arial']">
            Time
          </div>
          <div className="text-zinc-400 text-sm font-normal font-['Arial']">
            Task Description
          </div>
        </div>
        <div className="h-[99px] p-4 bg-zinc-800 border border-neutral-700 flex-col justify-start items-start gap-2 flex">
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            Task Name
          </div>
          <div className="text-zinc-500 text-xs font-normal font-['Arial']">
            Time
          </div>
          <div className="text-zinc-400 text-sm font-normal font-['Arial']">
            Task Description
          </div>
        </div>
        <div className="h-[99px] p-4 bg-zinc-800 border border-neutral-700 flex-col justify-start items-start gap-2 flex">
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            Task Name
          </div>
          <div className="text-zinc-500 text-xs font-normal font-['Arial']">
            Time
          </div>
          <div className="text-zinc-400 text-sm font-normal font-['Arial']">
            Task Description
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="text-zinc-400 text-sm font-normal font-['Arial']">
          Show More
        </div>
      </div>
    </div>
  );
};

export default AdventureLogProfileDisplay;
