/** @format */

import { bosses, skills, clueScrolls, miniGames } from "../repository/lists";
import getActivityNameFromId from "./getActivityNameFromId";

export const transformLogDetail = (log) => {
  const { detail } = log;
  let detailObj;

  try {
    detailObj = JSON.parse(detail);
  } catch (error) {
    console.error("Error parsing detail:", error);
    return "Error in log detail format.";
  }

  const { kind, path, lhs, rhs } = detailObj;
  console.log(detailObj);

  const activityId = parseInt(detailObj.path[1], 10);
  const count = detailObj.rhs;
  let activityType = "";

  if (!isNaN(activityId)) {
    if (activityId >= 17 && activityId <= 75) {
      activityType = "boss";
    } else if (activityId >= 6 && activityId <= 12) {
      activityType = "clueScroll";
    } else if (
      (activityId >= 0 && activityId <= 5) ||
      (activityId >= 13 && activityId <= 16)
    ) {
      activityType = "minigame";
    } else {
      activityType = "unknown";
    }
  }

  const activityName = getActivityNameFromId(activityId, activityType);

  if (
    activityType === "boss" &&
    bosses.some((boss) => boss.name === activityName)
  ) {
    return `You've defeated ${activityName} ${count} times!`;
  } else if (activityType === "skill" && skills.includes(activityName)) {
    return `You've leveled up your ${activityName} skill to level ${count}!`;
  } else if (
    activityType === "clueScroll" &&
    clueScrolls.some((scroll) => scroll.name === activityName)
  ) {
    return `You've now solved ${count} ${activityName}!`;
  } else if (
    activityType === "minigame" &&
    miniGames.some((game) => game.name === activityName)
  ) {
    return `You now have a score of ${count} in ${activityName}!`;
  }

  return "Unrecognized activity.";
};

export default transformLogDetail;
