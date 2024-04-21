/** @format */

import { useQuery } from "react-query";
import transformLogDetail from "../../util/transformLogDetail";

const AdventureLogLevel = ({ playerId }) => {
  const fetchSkillLogs = async () => {
    if (!playerId) {
      return;
    }
    const response = await fetch(`/api/adventurelogsSkill/${playerId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  };

  const {
    data: skillLogs,
    error,
    isLoading,
    isError,
  } = useQuery(["skillLogs", playerId], fetchSkillLogs, {
    enabled: !!playerId,
  });

  return (
    <div className="flex w-[500px] h-[300px] flex-col pr-12">
      <div className="flex items-center">
        <h2 className="text-zinc-200 text-2xl font-bold font-['Arial']">
          Skill Level Progress
        </h2>
      </div>
      <div className="w-full rounded-lg border border-neutral-700">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : skillLogs && skillLogs.length > 0 ? (
          skillLogs.map((log, index) => (
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
            No skill level progress entries found.
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

export default AdventureLogLevel;
