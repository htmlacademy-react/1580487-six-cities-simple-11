import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, LoginPage, RoomPage, NotFoundPage } from '../../pages';
import { AppRoute } from '../../router';
import { Offer } from '../../types';

export type AppProps = {
  offersCount: number;
  offersData: Offer[];
}

function App(props: AppProps): JSX.Element {
  const { offersCount, offersData } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage offersCount={offersCount} offersData={offersData} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Room} element={<RoomPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
