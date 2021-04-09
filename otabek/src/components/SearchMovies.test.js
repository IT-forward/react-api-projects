import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchMovies from "./SearchMovies";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("SearchMovies", () => {
  test("should render the correct h1", () => {
    const root = document.createElement("div");
    ReactDOM.render(<SearchMovies />, root);

    expect(root.querySelector("h1").textContent).toBe("React Movie Search");
  });
  test("initial query should be an empty string", () => {
    render(<SearchMovies />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("");
  });

  test("initial movies should be an empty array", () => {
    render(<SearchMovies />);
    const card = screen.queryByText("RELEASE DATE");
    expect(card).toBe(null);
  });

  test("calls the onSubmit callback function properly", () => {
    const onSubmit = jest.fn();
    const onChange = jest.fn();

    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });

    render(<Form onSubmit={onSubmit} onChange={onChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Star Wars" },
    });
    fireEvent.click(screen.getByRole("button"));

    expect(onChange).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });

  // test("works with async/await", async () => {
  //   render(<SearchMovies />);
  //   // expect.searchMovies(1);
  //   expect(SearchMovies).toContain(URL);
  //   const data = await fetch(URL);
  // });
});
