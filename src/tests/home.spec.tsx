import IndexPage from "../app/page";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("does not have basic accessibility issues", async () => {
    const { container } = render(<IndexPage />);

    expect(container).toHTMLValidate();
  });
});
