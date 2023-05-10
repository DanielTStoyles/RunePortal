/** @format */

import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import PlayerStatsDisplay from "./PlayerStatsDisplay";

const PlayerStatsCard = () => {
  const [playerName, setPlayerName] = useState("");

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", marginBottom: 1 }}
      >
        Player Stats
      </Typography>
      <TextField
        label="Player Name"
        variant="outlined"
        size="small"
        value={playerName}
        onChange={handleInputChange}
      />
      <PlayerStatsDisplay playerName={playerName} />
    </Box>
  );
};

export default PlayerStatsCard;
