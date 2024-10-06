import React from "react";
import { Button } from "@mui/material";

interface AddWidgetButtonProps {
  onAdd: () => void;
}

const AddWidgetButton: React.FC<AddWidgetButtonProps> = ({ onAdd }) => {
  return (
    <Button
      variant="contained"
      sx={{
        color: "black	",
        background: "#D6AF5C",
      }}
      onClick={onAdd}
    >
      Add Weather Widget
    </Button>
  );
};

export default AddWidgetButton;
