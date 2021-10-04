import render from '../../../testUtils/render';

import HeaderComponent from "../index";

describe("<HeaderComponent />", () => {
  const setup = () =>
    render(<HeaderComponent />);

  it("should render the container", () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
});
