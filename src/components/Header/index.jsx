import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const HeaderComponent = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
