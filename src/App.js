import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./app.routes";
import LayoutComponent from "./components/Layout";

export default function App() {
  return (
    <Router>
      <div>
        <LayoutComponent>
          <AppRoutes />
        </LayoutComponent>
      </div>
    </Router>
  );
}
