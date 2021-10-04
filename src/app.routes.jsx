import React from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import HomeContainer from "./containers/Home/";
import IncomeCalculatorContainer from "./containers/IncomeCalculator";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={routes.INCOME_CALCULATOR}>
        <IncomeCalculatorContainer />
      </Route>

      <Route path={routes.HOME}>
        <HomeContainer />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
