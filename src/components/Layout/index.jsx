import { Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import React from "react";
import HeaderComponent from "../Header";
import SideNavComponent from "../SideNav";

const drawerWidth = 240;

const LayoutComponent = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderComponent />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        open={true}
      >
        <Toolbar />

        <SideNavComponent />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default LayoutComponent;
