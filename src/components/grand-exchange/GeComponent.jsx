/** @format */

import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, TextField } from "@mui/material";
import getItemData from "./../../repository/getItemData";

const GeComponent = ({}) => {
  const [itemData, setItemData] = useState(null);
  const [itemName, setItemName] = useState("");
  const [error, setError] = useState("");

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
        const data = await getItemData(itemName);
        setItemData(data);
        console.log(data, "data log");
      };

      fetchItemData(itemName);
    }
  }, [itemName]);

  return (
    <div style={parentDiv}>
      <Card style={componentStyle}>
        <CardContent>
          <TextField
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter Item Id"
          />

          <Typography variant="h5" component="h2">
            {itemData && itemData.item ? itemData.item.name : "Loading..."}
          </Typography>
          <Typography variant="body2" component="p">
            {itemData && itemData.item
              ? `Current Price: ${itemData.item.current.price}`
              : "Loading..."}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeComponent;
