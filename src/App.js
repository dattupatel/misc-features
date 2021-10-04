import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import AppRoutes from "./app.routes";
import LayoutComponent from "./components/Layout";

export default function App() {
  return (
    <Router>
      <div>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <LayoutComponent>
            <AppRoutes />
          </LayoutComponent>
        </LocalizationProvider>
      </div>
    </Router>
  );
}
