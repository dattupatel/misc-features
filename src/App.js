import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./app.routes";
import Header from "./components/Header"

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
        <AppRoutes />
      </div>
    </Router>
  );
}
