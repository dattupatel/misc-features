import { AppBar, Toolbar, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

const HeaderComponent = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Link
          component={Button}
          onClick={(e) => e.stopPropagation()}
          to={routes.HOME}
          color="inherit"
        >
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
