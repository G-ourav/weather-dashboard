import React from "react";
import Dashboard from "./components/Dashboard";
import { Box } from "@mui/material";

import { TemperatureUnitProvider } from "./context/TemperatureUnitContext";

const App: React.FC = () => {
  return (
    <TemperatureUnitProvider>
      <Box
        sx={{
          px: {
            sm: 5,
            md: 5,
            xs: 2,
          },
          py: 5,
        }}
      >
        <Dashboard />
      </Box>
    </TemperatureUnitProvider>
  );
};

export default App;
