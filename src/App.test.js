import { render, screen } from '@testing-library/react';
import App from './App';
jest.mock("d3-format");


test('renders app as expected', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test('renders News and Trading Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/News and Trading App/i);
  expect(linkElement).toBeInTheDocument();
});
