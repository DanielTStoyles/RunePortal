/** @format */

import diff from "deep-diff";

const comparePlayerData = (oldData, newData) => {
  const differences = diff(oldData, newData);
  return differences;
};

export default comparePlayerData;
