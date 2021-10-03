import render from '../../../testUtils/render';

import IncomeCalculatorContainer from "../index";

describe("<IncomeCalculatorContainer />", () => {
  const setup = () =>
    render(<IncomeCalculatorContainer />);

  it("should render the container", () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
});
