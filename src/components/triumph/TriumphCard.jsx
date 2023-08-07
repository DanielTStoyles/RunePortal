/** @format */

import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";

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
        image={"http://localhost:3001/images/olm.png"}
        alt={triumph.name}
      />

      <Typography variant="body1" align="center">
        {triumph.name}
      </Typography>

      <Typography variant="body2" align="center">
        {triumph.description}
      </Typography>
    </Card>
  );
};

export default TriumphCard;
