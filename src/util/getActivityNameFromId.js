/** @format */
import { bosses, skills, clueScrolls, miniGames } from "../repository/lists";

const getActivityNameFromId = (activityId, activityType) => {
  let activityList;

  switch (activityType) {
    case "boss":
      activityList = bosses;
      break;
    case "clueScroll":
      activityList = clueScrolls;
      break;
    case "minigame":
      activityList = miniGames;
      break;
    default:
      return "Unknown Activity";
  }

  const activity = activityList.find((item) => item.id === activityId);
  return activity ? activity.name : "Unknown Activity";
};

export default getActivityNameFromId;
