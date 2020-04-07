import React from 'react';
import ReactNotification from 'react-notifications-component';
import GlobalStyle from './styles/global';
import Routes from './routes';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import 'dotenv/config';

function App() {
  return (
    <>
      <ReactNotification />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
