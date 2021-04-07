import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  render(<App />);
});

it("renders App component with search", () => {
  render(<App />);

  expect(screen.getByPlaceholderText('Search a country')).toBeInTheDocument();
}); 

