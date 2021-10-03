import { render } from "@testing-library/react";
import App from "./App";

test("renders container", () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});
