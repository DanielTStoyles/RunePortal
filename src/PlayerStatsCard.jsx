/** @format */

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PlayerStatsDisplay from "./PlayerStatsDisplay";

const PlayerStatsCard = () => {
  const [playerName, setPlayerName] = useState("");

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "10px",
        padding: "16px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" component="div">
        Player Stats
      </Typography>
      <TextField
        label="Enter player name"
        value={playerName}
        onChange={handlePlayerNameChange}
        variant="outlined"
        size="small"
        sx={{ marginTop: 1, marginBottom: 2 }}
      />
      <PlayerStatsDisplay playerName={playerName} />
    </Box>
  );
};

export default PlayerStatsCard;
