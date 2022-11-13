import React from 'react';
import { ThemeProvider } from 'styled-components';
import OpenCart from '../View/Shopping/Cart/OpenCart';

import ProductList from '../View/Shopping/Products/List';
import ViewTemplate from '../View/ViewTemplate';

import { Theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ViewTemplate headerProps={{ asideMenu: <OpenCart /> }}>
        <ProductList />
      </ViewTemplate>
    </ThemeProvider>
  );
}

export default App;
