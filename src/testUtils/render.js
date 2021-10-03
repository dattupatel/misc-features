import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const render = (ui) =>
  rtlRender(
    <Router>
      <LocalizationProvider dateAdapter={DateAdapter}>
        {ui}
      </LocalizationProvider>
    </Router>
  );
export default render;
