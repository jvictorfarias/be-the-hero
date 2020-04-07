import React from 'react';
import ReactNotification from 'react-notifications-component';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { useDarkMode } from './useDarkMode';
import Toggle from './components/Toggle';
import GlobalStyle from './styles/global';
import Routes from './routes';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Toggle theme={theme} toggleTheme={toggleTheme} />

      <>
        <ReactNotification />
        <Routes />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
