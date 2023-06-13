/** @format */

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { getItemByName } from "../../repository/getItemData";
// import getItemData, { getItemsData } from "./../../repository/getItemData";

const GeComponent = ({}) => {
  const [itemData, setItemData] = useState(null);
  const [itemName, setItemName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setItemName(inputValue);
  };

  const componentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    transition: "width 0.3s",
  };

  const parentDiv = {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    if (itemName !== "") {
      const fetchItemData = async (itemName) => {
        const item = await getItemByName(itemName);
        if (item) {
          setItemData(item);
          console.log(item, "data log");
        } else {
          console.log("item not found");
        }
      };

      fetchItemData(itemName);
    }
  }, [itemName]);

  return (
    <div style={parentDiv}>
      <Card style={componentStyle}>
        <CardContent>
          <TextField
            value={inputValue}
            onChange={(e) => {
              const newValue = e.target.value;
              setInputValue(
                newValue.charAt(0).toUpperCase() + newValue.slice(1)
              );
            }}
            placeholder="Enter Item Name"
          />
          <Button onClick={handleSubmit} variant="contained">
            Search
          </Button>

          <Typography variant="h5" component="h2">
            {itemData ? itemName : " "}
          </Typography>
          <Typography variant="body2" component="p">
            {itemData
              ? `High Price: ${itemData.high} gp, Low Price: ${itemData.low} gp`
              : " "}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeComponent;


