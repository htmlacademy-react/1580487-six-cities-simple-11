import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import { offers } from './mocks/offers';

const Rental = {
  OffersCount: 312,
  OffersData: offers
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={Rental.OffersCount} offersData={Rental.OffersData} />
  </React.StrictMode>,
);
