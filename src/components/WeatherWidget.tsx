import React, { useState, useContext } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { TemperatureUnitContext } from "../context/TemperatureUnitContext";

interface WeatherWidgetProps {
  data: {
    id: string;
    location: string;
    temperature: number;
    weatherCondition: string;
  };
  onRemove: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data, onRemove }) => {
  const context = useContext(TemperatureUnitContext);

  if (!context) {
    throw new Error(
      "TemperatureDisplay must be used within a TemperatureProvider"
    );
  }

  const { unit } = context;
  return (
    <Box
      sx={{
        bgcolor: "#A9A9A9	",
        padding: 5,
        borderRadius: 10,
      }}
    >
      <Typography
        sx={{
          fontSize: 20,
        }}
      >
        {data.location}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">
          {unit
            ? `${(data.temperature * (9 / 5) + 32).toFixed(1)} °F`
            : `${data.temperature.toFixed(1)}  °C`}
        </Typography>
      </Box>
      <Typography>{data.weatherCondition}</Typography>
      <IconButton
        sx={{
          color: "black	",
          bgcolor: "#D6AF5C",
        }}
        onClick={onRemove}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default WeatherWidget;
