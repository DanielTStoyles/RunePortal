/** @format */

import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import TriumphCard from "./TriumphCard";

const TriumphGrid = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={10}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h2" align="center" gutterBottom>
          Triumphs of RunePortal
        </Typography>
        <Grid container spacing={12} justifyContent="center">
          <Grid item>
            <TriumphCard />
          </Grid>
          <Grid item>
            <TriumphCard />
          </Grid>
          <Grid item>
            <TriumphCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={12}>
          <Grid item>
            <TriumphCard />
          </Grid>
          <Grid item>
            <TriumphCard />
          </Grid>
          <Grid item>
            <TriumphCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={12}>
          <Grid item>
            <TriumphCard />
          </Grid>
          <Grid item>
            <TriumphCard />
          </Grid>
          <Grid item>
            <TriumphCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TriumphGrid;
