/** @format */

import React, { useState } from "react";
import { Grid } from "@mui/material";
import TriumphCard from "./TriumphCard";

const TriumphGrid = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={10}
      justifyContent="center"
      alignItems="center"
      marginTop="15px"
    >
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
