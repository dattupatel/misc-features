import { render } from "@testing-library/react";
import App from "./App";

describe("App", () =>{
  it("renders App container", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
})
