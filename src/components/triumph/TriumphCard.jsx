/** @format */

import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const TriumphCard = ({ triumph }) => {
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
        image={triumph.icon}
        alt={triumph.name}
      />

      <Typography variant="body1" align="center">
        {triumph.name}
      </Typography>
    </Card>
  );
};

export default TriumphCard;
