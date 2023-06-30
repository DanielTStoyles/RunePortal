/** @format */

import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const TriumphCard = () => {
  return (
    <Card
      sx={{
        width: "200px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0.9,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "160px",
          width: "160px",
          padding: "2px",
          borderRadius: 0.9,
        }}
        height="30 px"
        image="/images/AiTrophy.png"
        alt="Triump Trophy Image"
      />
      <Typography> HUGE TRIUMPH ENERGY </Typography>
    </Card>
  );
};

export default TriumphCard;
