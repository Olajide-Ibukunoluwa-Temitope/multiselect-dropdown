import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component without crashing', () => {
  render(<App />);
  // const linkElement = screen.getByText(/multiselect/i);
  expect(screen).toBeTruthy();
});
