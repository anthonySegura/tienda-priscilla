import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import CartView from './components/cartView';
import App from './App';
import ProductDetails from './components/productDetails';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/carrito" component={CartView} />
      <Route path="/producto/:id" component={ProductDetails} />
    </div>
  </Router>
);

export default routing;