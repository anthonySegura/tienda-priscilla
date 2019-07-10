import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import CartView from './components/cartView';
import App from './App';
import ProductDetails from './components/productDetails';
import store from './redux_store/state';
import { set_cart_from_cookie } from './redux_store/actions';
import cookie from 'react-cookies';

let cart = cookie.load('carrito');
store.dispatch(set_cart_from_cookie(cart));

const routing = (
  <Router>
    <div>
      <Route exact path="/"
        render={(props) => <App {...props} />} />
      <Route path="/carrito" component={CartView} />
      <Route path="/producto/:id" component={ProductDetails} />
    </div>
  </Router>
);

export default routing;