import render from '../../../testUtils/render';

import SideNavComponent from "../index";

describe("<SideNavContainer/>", () => {
  const setup = () =>
    render(<SideNavComponent />);

  it("should render the container", () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
  it("should have the text 'Home' and 'Income Calculator'", () => {
    const { getByText } = setup();
    expect(getByText(/home/i)).toBeInTheDocument();
    expect(getByText(/Income Calcluator/i)).toBeInTheDocument();
  });
});
