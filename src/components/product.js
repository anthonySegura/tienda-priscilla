import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../redux_store/state';
import { add_product, remove_product } from '../redux_store/actions';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      added: false
    }
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeToCart = this.removeToCart.bind(this);
    this.handleCartAction = this.handleCartAction.bind(this);
  }

  /**
   * Aumenta la cantidad de unidades del producto
   */
  addProduct() {
    if (this.state.count < this.props.stock) {
      this.setState({
        count: this.state.count + 1,
      })
    }
  }

  /**
   * Disminuye la cantidad de unidades del producto
   */
  removeProduct() {
    // Logica de eliminar del carrito
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  /**
   * Agrega el pedido de x unidades de producto al carrito
   */
  addToCart() {
    this.setState({
      added: true
    })
    let product = {
      name: this.props.name,
      id: this.props.id,
      price: this.props.price,
      img: this.props.img,
      tax: this.props.tax,
      units: this.state.count
    }
    store.dispatch(add_product(product));
  }

  /**
   * Elimina el pedido del producto del carrito
   */
  removeToCart() {
    this.setState({
      added: false
    })
    store.dispatch(remove_product(this.props.id));
  }

  handleCartAction() {
    this.state.added ? this.removeToCart() : this.addToCart();
  }

  render() {
    return (
      <div className="col-sm">
        <div className="card text-center">
          <div className="card-body">
            <Link to={`/producto/${this.props.id}`}>
              <img className="product-img" src={this.props.img} alt={this.props.name} />
            </Link>
            <h5 className="card-title" >{this.props.name}</h5>
            <h4 className="card-text price">&#8353; {this.props.price}</h4>
            <div className="stepper-input">
              <span className="decrement" onClick={this.removeProduct}>-</span>
              <input className="quantity" value={this.state.count} />
              <span className="increment" onClick={this.addProduct}>+</span>
            </div>
            <span className={this.state.added ? "btn btn-danger" : "btn btn-primary"}
              onClick={this.handleCartAction} >
              {this.state.added ? "Quitar del carrito" : "Agregar al carrito"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;