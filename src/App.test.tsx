import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn people link', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/People/i);
  
  expect(linkElement).toBeInTheDocument();
});

test('renders welcome heading', () => {
  render(<App />);

  const headingElement = screen.getByText(/Welcome/i);

  expect(headingElement).toBeInTheDocument();
});
