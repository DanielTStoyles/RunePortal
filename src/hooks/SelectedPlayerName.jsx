/** @format */

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SelectedPlayerName = () => {
  const { user } = useContext(AuthContext);

  // check for user and rsn in user
  const rsn = user?.rsn || "No player selected";

  return (
    <div className="selected-player-name">
      <p>{rsn}</p>
    </div>
  );
};

export default SelectedPlayerName;
