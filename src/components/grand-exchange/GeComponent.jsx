/** @format */

import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, TextField } from "@mui/material";
import getItemData from "./../../repository/getItemData";

const GeComponent = () => {
  const [itemData, setItemData] = useState(null);
  const [itemId, setItemId] = useState("");

  useEffect(() => {
    if (itemId !== "") {
      const fetchItemData = async (itemId) => {
        const data = await getItemData(itemId);
        setItemData(data);
        console.log(data, "data log");
      };

      fetchItemData(itemId);
    }
  }, [itemId]);

  return (
    <div>
      <Card>
        <CardContent>
          <TextField
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
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
