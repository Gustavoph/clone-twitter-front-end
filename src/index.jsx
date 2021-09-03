import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Home from './views/Home';
import { GlobalStyles } from './style/global-style';
import { theme } from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
