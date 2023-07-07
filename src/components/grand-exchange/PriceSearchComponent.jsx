/** @format */
import "./geStyles.css";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { getItemByName } from "../../repository/getItemData";
import PriceChart from "./PriceChart.jsx";

const PriceSearchComp = () => {
  const [itemData, setItemData] = useState(null);
  const [itemName, setItemName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [timeSeriesData, setTimeSeriesData] = useState([]);

  const handleSubmit = () => {
    const nameToUppercase =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setItemName(nameToUppercase);
  };

  const componentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1 px",
    width: "25%",
    height: "25%",
    transition: "width 0.3s",
    borderRadius: "0.6",
  };
  const chartStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1 px",
    width: "100%",
    height: "100%",
    transition: "width 0.3s",
  };

  const parentDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    if (itemName !== "") {
      const fetchItemData = async (itemName) => {
        const data = await getItemByName(itemName);
        const { highLow, timeSeries } = data;
        console.log(timeSeries);
        if (highLow && timeSeries) {
          setItemData(highLow);
          setTimeSeriesData(timeSeries);
          console.log(highLow, "data log");
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
              setInputValue(newValue);
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

      <Card style={{ width: "65%", height: "65%" }}>
        <CardContent style={chartStyle}>
          {itemData && itemName && timeSeriesData ? (
            <PriceChart
              high={itemData.high}
              low={itemData.low}
              title={itemName}
              timeSeries={timeSeriesData}
            />
          ) : (
            <Typography variant="h5" component="h2">
              No data available. Please enter an item name and press Search.
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceSearchComp;
