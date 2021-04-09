import SearchMovies from "./SearchMovies";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("SearchMovies", () => {
  test("initial query should be empty string", () => {
    render(<SearchMovies />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("");
  });

  test("initial movies should be empty array", () => {
    render(<SearchMovies />);
    const card = screen.queryByText("RELEASE DATE");
    expect(card).toBe(null);
  });

  test("calls the onSubmit callback function", () => {
    const onSubmit = jest.fn();
    const setQuery = jest.fn();

    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });

    render(<Form onSubmit={onSubmit} setQuery={setQuery} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Star Wars" },
    });
    fireEvent.click(screen.getByRole("button"));

    expect(setQuery).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });

  // test("works with async/await", async () => {
  //   render(<SearchMovies />);
  //   // expect.searchMovies(1);
  //   expect(SearchMovies).toContain(URL);
  //   const data = await fetch(URL);
  // });
});
