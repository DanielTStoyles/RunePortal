/** @format */

import React, { useState, useContext, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TriumphCard from "./TriumphCard";
import { UserContext } from "../../context/UserContext";
import { fetchUserTriumphs } from "./GetTriumphs";
import UsePageName from "../home/PageName";

const TriumphGrid = ({ drawerOpen }) => {
  const { user } = useContext(UserContext);
  const [triumphs, setTriumphs] = useState([]);

  useEffect(() => {
    console.log(user);
    if (user) {
      fetchUserTriumphs(user.rsn).then(setTriumphs);
      console.log(user.rsn);
    } else {
      console.log("nah bro, not founderino");
    }
  }, [user.rsn]);

  const pageName = UsePageName();

  const paddingLeft = drawerOpen ? "8px" : "48px";

  return (
    <div>
      <Typography
        variant="h4"
        style={{ textAlign: "left", paddingLeft: paddingLeft }}
      >
        {pageName}
      </Typography>
      <Grid
        container
        direction="column"
        spacing={10}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2" align="center" gutterBottom>
            {user.rsn}'s Triumphs
          </Typography>
          <Grid item>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Triumphs..."
              InputProps={{
                endAdornment: (
                  <InputAdornment positon="end">
                    <IconButton edge="end" color="primary">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ paddingBottom: "10px" }}
            ></TextField>
          </Grid>

          {!triumphs ? (
            <Typography variant="h5" align="center" gutterBottom>
              {user.rsn}'s Triumphs
            </Typography>
          ) : (
            <Grid container spacing={12} justifyContent="center">
              {triumphs.map((triumph, index) => (
                <Grid item key={index}>
                  <TriumphCard triumph={triumph} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default TriumphGrid;
