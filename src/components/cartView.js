import React, { Component } from 'react';
import Header from './header';

class CartView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Carrito</h1>
      </div>
    );
  }
}

export default CartView;