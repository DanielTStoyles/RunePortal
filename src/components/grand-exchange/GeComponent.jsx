/** @format */

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import getItemData, { getItemsData } from "./../../repository/getItemData";

const GeComponent = ({}) => {
  const [itemData, setItemData] = useState(null);
  const [itemName, setItemName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [itemId, setItemId] = useState("");

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
        const items = await getItemsData();
        const item = items.find((item) => item.name === itemName);
        if (item) {
          const data = await getItemData(item.id);
          setItemId(item.id);

          setItemData(data);
          console.log(data, "data log");
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
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Item Name"
          />
          <Button onClick={handleSubmit} variant="contained">
            Search
          </Button>

          <Typography variant="h5" component="h2">
            {itemData ? itemName : "Loading..."}
          </Typography>
          <Typography variant="body2" component="p">
            {itemData && itemData.data && itemData.data[itemId]
              ? `High Price: ${itemData.data[itemId].high}, Low Price: ${itemData.data[itemId].low}`
              : "Loading..."}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeComponent;
