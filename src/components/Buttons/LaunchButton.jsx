import { Button } from "@mui/material";
import React from "react";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" color="secondary" sx={{ borderRadius: 2, ...sx }} {...props}>
 
    </Button>
  );
};

export default LaunchButton;