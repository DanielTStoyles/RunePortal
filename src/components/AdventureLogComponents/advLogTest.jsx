/** @format */

const AdvLogTest = () => {
  return (
    <div className="w-[628px] h-[402px] flex flex-col justify-start items-start gap-4">
      <div className="text-zinc-200 text-xl font-normal font-sans">
        Skill Level Progress
      </div>
      <div className="w-full h-[546px] rounded-lg  overflow-y-auto flex flex-col justify-start items-start">
        {/* Entries within this div become scrollable after the 6th entry */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`w-full h-[77px] px-6 py-4 bg-zinc-800 ${
              index < 9 ? "border-b border-neutral-700" : ""
            } flex flex-col justify-start items-start gap-2`}
          >
            <div className="w-full text-zinc-200 text-lg font-normal font-sans">
              You reached level 99 in Skill Name!
            </div>
            <div className="text-zinc-500 text-sm font-normal font-sans">
              dd/mm/yyyy 24:00
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvLogTest;
