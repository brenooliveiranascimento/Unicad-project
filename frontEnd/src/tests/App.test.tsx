import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import {createMemoryHistory} from 'history'
import { renderWithRouterAndRedux } from './helpers/helpers';
import { reduxState } from './helpers/reduxMock';
import { LoadScript } from '@react-google-maps/api';
import Home from '../pages/Home/Home';
import NewDelivery from '../pages/NewDelivery/NewDelivery';

describe('Test if on home screen', () => {

  it('Renders the delivery table', async () => {
    renderWithRouterAndRedux(<App />,
      {
        initialEntries: ['/'],
        initialState: reduxState
      });
    const tableField = await screen.getByText(/Cadastrar/i);
    expect(tableField).toBeInTheDocument();
  });

  it('We are directed to the registration screen when clicking on the sidebar link', async () => {
    renderWithRouterAndRedux(<NewDelivery />,
    {
      initialEntries: ['/newDelivery'],
      initialState: reduxState
    });
    const title = await screen.queryAllByText(/Cadastrar entrega/i);
    expect(title[0]).toBeInTheDocument();

    const clientInput = await screen.getByPlaceholderText('Cliente');
    expect(clientInput).toBeInTheDocument();

  })
})
