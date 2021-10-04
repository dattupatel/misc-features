import render from '../../../testUtils/render';

import LayoutComponent from "../index";

describe("<LayoutComponent />", () => {
  const setup = () =>
    render(<LayoutComponent />);

  it("should render the container", () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
});
