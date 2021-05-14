import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { ProductsContext } from './contexts'
import { Product } from './models'


import HomePage from './pages/home';
import './index.css';

function App() {
  const [products, setProducts] = useState<Product[]>()


  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </ProductsContext.Provider>
  )
}

export default App;
