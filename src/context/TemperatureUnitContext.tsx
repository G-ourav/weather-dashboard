import React, { createContext, useState, ReactNode } from "react";

interface TemperatureUnitContextProps {
  unit: boolean; // Corrected type from true to boolean
  changeUnit: () => void;
}

// Create the context with a default value
export const TemperatureUnitContext =
  createContext<TemperatureUnitContextProps>({
    unit: true,
    changeUnit: () => {},
  });

// Create the provider component
export const TemperatureUnitProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [unit, setUnit] = useState<boolean>(true);

  // Corrected toggleUnit function to toggle between true and false
  const changeUnit = () => {
    setUnit((prevUnit) => !prevUnit);
  };

  return (
    <TemperatureUnitContext.Provider value={{ unit, changeUnit }}>
      {children}
    </TemperatureUnitContext.Provider>
  );
};
