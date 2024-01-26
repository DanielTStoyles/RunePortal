/** @format */
const AdventureLogProfileDisplay = () => {
  return (
    <div className="flex flex-col pr-12">
      {" "}
      {/* Use flex-col for a column layout and padding */}
      {/* Title container without a set width to align with the content below */}
      <div className="flex items-center mb-4">
        {" "}
        {/* Add bottom margin for spacing */}
        <h2 className="text-zinc-200 text-2xl font-bold font-['Arial']">
          Adventure Log
        </h2>
      </div>
      {/* Container for tasks */}
      <div className="w-full rounded-lg border border-neutral-700">
        {/* Task entries */}
        <div className="h-[99px] p-4 bg-zinc-800 border-b border-neutral-700 flex flex-col justify-start gap-2">
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
        <div className="h-[99px] p-4 bg-zinc-800 border-b border-neutral-700 flex flex-col justify-start gap-2">
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
        <div className="h-[99px] p-4 bg-zinc-800 border-b border-neutral-700 flex flex-col justify-start gap-2">
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
      {/* Show More link */}
      <div className="flex justify-start mt-4">
        {" "}
        {/* Top margin for spacing */}
        <div className="text-zinc-400 text-sm font-normal font-['Arial']">
          Show More
        </div>
      </div>
    </div>
  );
};

export default AdventureLogProfileDisplay;
