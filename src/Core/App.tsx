import React from 'react';
import { ThemeProvider } from 'styled-components';
import ViewTemplate from '../View/ViewTemplate';
import { Theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ViewTemplate>App works!</ViewTemplate>
    </ThemeProvider>
  );
}

export default App;
