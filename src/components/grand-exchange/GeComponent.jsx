/** @format */

import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import getItemData from "./repository/getItemData";

const GeComponent = () => {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      const data = await getItemData(115); // 115 to be replaced with id associated with item name entered by user
      setItemData(data);
    };

    fetchItemData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {itemData ? itemData.name : "Loading..."}
        </Typography>
        <Typography variant="body2" component="p">
          {itemData ? `Current Price: ${itemData.price}` : "Loading..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GeComponent;
