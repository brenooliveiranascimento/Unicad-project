import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/helpers';
import { reduxState } from './helpers/reduxMock';
import { LoadScript } from '@react-google-maps/api';

describe('Test if on home screen', () => {
  it('renders the delivery table', async () => {
    const { store, history } = renderWithRouterAndRedux(
      <App />,
    {
      initialEntries: ['/'],
      initialState: reduxState
    },
  );
    const tableField = await screen.getByText(/Fulano de tal/i);
    expect(tableField).toBeInTheDocument();
    expect(store.getState()).toEqual(reduxState)
});
})
