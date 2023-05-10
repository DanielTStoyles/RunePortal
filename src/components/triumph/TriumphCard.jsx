/** @format */

import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const TriumphCard = () => {
  const [playerName, setPlayerName] = useState("");

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <Box>
      <Typography></Typography>
      <TextField />
    </Box>
  );
};
