/** @format */

import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import PlayerStatsDisplay from "./PlayerStatsDisplay";
import { UserContext } from "../../context/UserContext";

const PlayerStatsCard = () => {
  const { user } = useContext(UserContext);

  if (!user || !user.rsn) {
    console.log("user not found");
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
        <Typography>No player stats available.</Typography>
      </Box>
    );
  }

  const rsn = user.rsn;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
        Player Stats
      </Typography>
      <PlayerStatsDisplay rsn={rsn} />
    </Box>
  );
};

export default PlayerStatsCard;
