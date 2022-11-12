import React from 'react';
import { ThemeProvider } from 'styled-components';

import ShoppingCart from '../View/Shopping/Cart';
import ProductList from '../View/Shopping/Products/List';
import ViewTemplate from '../View/ViewTemplate';

import { Theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ViewTemplate headerProps={{ asideMenu: <ShoppingCart /> }}>
        <ProductList />
      </ViewTemplate>
    </ThemeProvider>
  );
}

export default App;
