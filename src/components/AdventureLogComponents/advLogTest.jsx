/** @format */

const AdvLogTest = () => {
  return (
    <div className="w-[628px] h-[402px] flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-zinc-200 text-xl font-normal font-['Arial']">
        Skill Level Progress
      </div>
      <div className="w-[628px] h-[546px] rounded-lg border border-gray-800 overflow-y-auto flex-col justify-start items-start flex">
        {/* Entries within this div become scrollable after the 6th entry */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="self-stretch h-[77px] px-6 py-4 bg-zinc-800 border-b border-gray-800 flex-col justify-start items-start gap-2 flex"
          >
            <div className="self-stretch text-zinc-200 text-lg font-normal font-['Arial']">
              You reached level 99 in Skill Name!
            </div>
            <div className="text-zinc-500 text-sm font-normal font-['Arial']">
              dd/mm/yyyy 24:00
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvLogTest;
