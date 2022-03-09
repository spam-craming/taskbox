import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Taskbox header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Taskbox/i);
  expect(headerElement).toBeInTheDocument();
});
