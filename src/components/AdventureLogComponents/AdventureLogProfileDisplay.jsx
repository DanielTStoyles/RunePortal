/** @format */

import { useQuery } from "react-query";
import transformLogDetail from "../../util/transformLogDetail";

const AdventureLogProfileDisplay = ({ playerId }) => {
  const fetchAdventureLogs = async () => {
    if (!playerId) {
      return;
    }
    const response = await fetch(`/api/adventurelogs/${playerId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  };

  const {
    data: adventureLogs,
    error,
    isLoading,
    isError,
  } = useQuery(["adventureLogs", playerId], fetchAdventureLogs, {
    enabled: !!playerId,
  });

  if (!playerId) {
    return <div className="text-white">Loading player data...</div>;
  }

  return (
    <div className="flex flex-grow flex-col pr-4">
      <div className="flex items-center mb-4">
        <h2 className="text-zinc-200 text-2xl font-bold font-['Arial']">
          Adventure Log
        </h2>
      </div>
      <div className="w-full rounded-lg border border-neutral-700">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : Array.isArray(adventureLogs) ? (
          adventureLogs.map((log, index) => (
            <div
              key={index}
              className="h-[99px] p-4 bg-zinc-800 border-b border-neutral-700 flex flex-col justify-start gap-2"
            >
              <div className="text-zinc-200 text-lg font-normal font-['Arial']">
                {transformLogDetail(log)}
              </div>
            </div>
          ))
        ) : (
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            {transformLogDetail(adventureLogs)}
          </div>
        )}
      </div>
      <div className="flex justify-start mt-4">
        <div className="text-zinc-400 text-sm font-normal font-['Arial']">
          Show More
        </div>
      </div>
    </div>
  );
};

export default AdventureLogProfileDisplay;
