import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

import { ErrorBoundary } from './components/ErrorBoundary';
import AppConnect from './components/AppConnect';

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Router>
          <AppConnect />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
