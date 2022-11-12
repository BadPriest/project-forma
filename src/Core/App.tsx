import React from 'react';
import { ThemeProvider } from 'styled-components';

import ShoppingCart from '../View/Shopping/Cart';
import ViewTemplate from '../View/ViewTemplate';

import { Theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ViewTemplate headerProps={{ asideMenu: <ShoppingCart /> }}>
        App works!
      </ViewTemplate>
    </ThemeProvider>
  );
}

export default App;
