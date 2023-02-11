import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/helpers';
import { reduxState } from './helpers/reduxMock';

test('renders learn react link', () => {
  renderWithRouterAndRedux(<App />, {
    initialState: reduxState,
  });
  const linkElement = screen.findByText(/Cliente/i);
  expect(linkElement).toBeInTheDocument();
});
