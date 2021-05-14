import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { CartContext, ProductsContext } from './contexts'
import { Product } from './models'


import HomePage from './pages/home';
import './index.css';

function App() {
  const localCartCount: number = Number(localStorage.getItem('cartCount')) ? Number(localStorage.getItem('cartCount')) : 0;
  const [cartCount, setCartCount] = useState<number>(localCartCount);
  const [products, setProducts] = useState<Product[]>();

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </ProductsContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
