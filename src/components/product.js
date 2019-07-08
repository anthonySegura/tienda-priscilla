import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="col-sm">
        <div className="card text-center">
          <div className="card-body">
            <img src={this.props.img} alt={this.props.name} />
            <h5 className="card-title">{this.props.name}</h5>
            <h4 className="card-text price">&#8353; {this.props.price}</h4>
            <div className="stepper-input">
              <span className="decrement" >-</span>
              <input className="quantity" value={0} />
              <span className="increment">+</span>
            </div>
            <span className="btn btn-primary add" >Agregar al carrito</span>

          </div>
        </div>
      </div>
    );
  }
}

export default Product;