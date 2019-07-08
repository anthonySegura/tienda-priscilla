import React, { Component } from 'react';
import Login from './login';
import ShoppingCart from './shoppingCart';
import {
  Navbar,
  Form,
  FormControl,
  Button
}
  from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Navbar bg="light" sticky="top">
        <Navbar.Brand href="#home">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline className="search-bar">
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-info" className="fa fa-search"></Button>
        </Form>
        <div className="cart-login-section">
          <ShoppingCart />
          <Login />
        </div>

      </Navbar>
    );
  }
}

export default Header;