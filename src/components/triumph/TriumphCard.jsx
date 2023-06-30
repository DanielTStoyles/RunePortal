/** @format */

import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const TriumphCard = () => {
  return (
    <Card
      sx={{
        minWidth: "200px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0.9,
        padding: 1,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "160px",
          width: "160px",
          borderRadius: 0.9,
        }}
        image="/images/AiTrophy.png"
        alt="Triump Trophy Image"
      />

      <Typography variant="body1" align="center">
        HUGE TRIUMPH ENERGY
      </Typography>
    </Card>
  );
};

export default TriumphCard;
