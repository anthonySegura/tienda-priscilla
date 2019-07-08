import React, { Component } from 'react';
import Login from './login';
import ShoppingCart from './shoppingCart';
import {
  Navbar,
  Nav,
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
      <Navbar bg="light" sticky="top" expand="lg">
        <Navbar.Brand href="#home">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Form inline className="search-bar">
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-info" className="fa fa-search"></Button>
          </Form>
          <div className="cart-login-section">
            <ShoppingCart />
            <Login />
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;