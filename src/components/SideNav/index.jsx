import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

const SideNavComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.INCOME_CALCULATOR}>Income Calcluator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavComponent;
