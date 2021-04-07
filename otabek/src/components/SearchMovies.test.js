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
    render(<Form onSubmit={onSubmit} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Star Wars" },
    });
    fireEvent.click(screen.getByRole("button"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test("calls the onChange callback function", () => {
    const onChange = jest.fn();

    render(<Form onChange={onChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Star Wars" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

// test("input value is updated correctly", () => {
//     render(<Search />);

//     const input = screen.getByRole('textbox');
//     UserEvent.type(input, 'Uzbekistan');

//     expect(input.value).toBe('Uzbekistan');
// });

// test("calls the onChange callback handler", () => {
//     const onChange = jest.fn();

//     render(
//         <Search onChange={onChange}/>
//     );

//     fireEvent.change(screen.getByRole('textbox'), {
//         target: { value: 'Uzbekistan' },
//     });

//     expect(onChange).toHaveBeenCalledTimes(1);
// });
