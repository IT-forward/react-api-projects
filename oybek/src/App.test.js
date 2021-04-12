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

it("renders App component with headers and search", () => {
  render(<App />);

  expect(screen.getByText('COVID-19 Statistics')).toBeInTheDocument();

  expect(screen.getByPlaceholderText('Search a country')).toBeInTheDocument();

  expect(screen.getByText('Statistics by country')).toBeInTheDocument();
}); 

