import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import WeatherWidget from "./WeatherWidget";
import AddWidgetButton from "./AddWidgetButton";
import { TemperatureUnitContext } from "../context/TemperatureUnitContext";

interface WeatherWidgetData {
  id: string;
  location: string;
  temperature: number;
  weatherCondition: string;
}

const Dashboard: React.FC = () => {
  const context = useContext(TemperatureUnitContext);

  if (!context) {
    throw new Error(
      "TemperatureDisplay must be used within a TemperatureProvider"
    );
  }

  const { unit, changeUnit } = context;

  const [widgets, setWidgets] = useState<WeatherWidgetData[]>([]);

  useEffect(() => {
    const savedWidgets = localStorage.getItem("weatherWidgets");
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weatherWidgets", JSON.stringify(widgets));
  }, [widgets]);

  const addWidget = () => {
    const redomTemp = Math.floor(Math.random() * 30) + 10;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newWidget = {
          id: Date.now().toString(),
          location: `${position.coords.latitude}, ${position.coords.longitude} India`, // Latitude and Longitude
          temperature: redomTemp,
          weatherCondition: redomTemp > 20 ? "Sunny" : "Rainy",
        };

        setWidgets((prevWidgets) => [...prevWidgets, newWidget]);
      },
      (error) => {
        console.error("Error getting location:", error);
        const newWidget = {
          id: Date.now().toString(),
          location: "India", // Default value
          temperature: redomTemp,
          weatherCondition: redomTemp > 20 ? "Sunny" : "Rainy",
        };

        setWidgets((prevWidgets) => [...prevWidgets, newWidget]);
      }
    );
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  return (
    <Box
      sx={{
        display: "block",
        bgcolor: "#D3D3D3",
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          bgcolor: "#A9A9A9	",
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Weather Dashboard
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <AddWidgetButton onAdd={addWidget} />

          <Box>
            <Button
              variant="contained"
              sx={{
                color: "black	",
                background: "#D6AF5C",
              }}
              onClick={() => {
                changeUnit();
              }}
            >
              {unit ? "°C" : "°F"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Grid
        sx={{
          py: 5,
        }}
        container
        spacing={2}
      >
        {widgets.map((widget) => (
          <Grid item xs={12} md={6} lg={4} key={widget.id}>
            <WeatherWidget
              data={widget}
              onRemove={() => removeWidget(widget.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
