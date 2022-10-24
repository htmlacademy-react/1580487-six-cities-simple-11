import React from 'react';
import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  offersCount: number;
}

function App(props: AppProps): JSX.Element {
  const { offersCount } = props;

  return (
    <MainPage offersCount={offersCount} />
  );
}

export default App;
