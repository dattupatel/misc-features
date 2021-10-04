import render from '../../../testUtils/render';

import HomeContainer from "../index";

describe("<HomeContainer />", () => {
  const setup = () =>
    render(<HomeContainer />);

  it("should render the container", () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
});
