import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import store from '../redux_store/state';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    store.subscribe(() => {
      this.setState({
        products: store.getState().cart
      })
    });
  }

  componentDidMount() {
    this.setState({
      products: store.getState().cart
    })
  }
  

  render() {
    return (
      <Link to="/carrito">
        <Button variant="inline" className="fa fa-shopping-cart">
          <Badge variant="light" hidden={this.state.products.length > 0 ? false : true}>
            {this.state.products.length}
          </Badge>
        </Button>
      </Link>
    );
  }
}

export default ShoppingCart;