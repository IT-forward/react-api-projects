import * as React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  test("renders the correct output", () => {
    const { getByText, getByLabelText } = render(<Form />);

    getByText("Movie Name");
    getByLabelText("Movie Name");
    getByText("Search");
  });
});
