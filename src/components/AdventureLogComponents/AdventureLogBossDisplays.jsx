/** @format */

import { useQuery } from "react-query";
import transformLogDetail from "../../util/transformLogDetail";

const AdventureLogBossDisplay = ({ playerId }) => {
  const fetchAdventureLogs = async () => {
    if (!playerId) {
      return;
    }
    const response = await fetch(`/api/adventurelogsBoss/${playerId}`);
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
  } = useQuery(["adventureLogs", "boss", playerId], fetchAdventureLogs, {
    enabled: !!playerId,
  });

  if (!playerId) {
    return <div className="text-white">Loading player data...</div>;
  }

  // Filter boss score entries
  const bossScoreEntries = adventureLogs?.filter((log) => {
    const detail = JSON.parse(log.detail);
    const pathValue = detail.path[1];
    return pathValue >= 18 && pathValue <= 78;
  });

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex items-center">
        <h2 className="text-zinc-200 text-2xl font-bold font-['Arial']">
          Bosses
        </h2>
      </div>
      <div
        className="w-full rounded-lg border border-neutral-700 overflow-y-auto"
        style={{ maxHeight: "320px" }}
      >
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : bossScoreEntries && bossScoreEntries.length > 0 ? (
          bossScoreEntries.map((log, index) => (
            <div
              key={index}
              className="h-[80px] p-2 bg-zinc-800 border-b border-neutral-700 flex flex-col justify-start gap-2"
            >
              <div className="text-zinc-200 text-lg font-normal font-['Arial'] mt-2">
                {transformLogDetail(log)}
              </div>
            </div>
          ))
        ) : (
          <div className="text-zinc-200 text-lg font-normal font-['Arial']">
            No boss score entries found.
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

export default AdventureLogBossDisplay;
