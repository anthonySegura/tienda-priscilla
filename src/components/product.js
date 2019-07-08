import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct() {
    // Logica de agregar al carrito
    this.setState({
      count: this.state.count + 1
    })
  }

  removeProduct() {
    // Logica de eliminar del carrito
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  render() {
    return (
     
        <div className="col-sm">
          <Link to={`/producto/${this.props.id}`}>
            <div className="card text-center">
              <div className="card-body">
                <img src={this.props.img} alt={this.props.name} />
                <h5 className="card-title" >{this.props.name}</h5>
                <h4 className="card-text price">&#8353; {this.props.price}</h4>
                <div className="stepper-input">
                  <span className="decrement" onClick={this.removeProduct}>-</span>
                  <input className="quantity" value={this.state.count} />
                  <span className="increment" onClick={this.addProduct}>+</span>
                </div>
                <span className="btn btn-primary add" >Agregar al carrito</span>

              </div>
            </div>
          </Link>
        </div>
    );
  }
}

export default Product;