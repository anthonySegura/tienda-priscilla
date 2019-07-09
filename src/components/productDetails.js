import React, { Component } from 'react';
import Header from './header';
import { getProduct } from '../api_requests/requests';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      img: '',
      stock: '',
      tax: ''
    }
  }

  async componentDidMount() {
    const { params } = this.props.match;
    // Obtiene la información del producto desde el api
    let productDetails = await getProduct(params.id);
    this.setState({
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.price,
      img: productDetails.img,
      stock: productDetails.stock,
      tax: productDetails.tax,
      count: 1,
      added: false
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <img className="product-img-details" src={this.state.img} />
                  </div>
                  <div className="col text-center">
                    <h1>{this.state.name}</h1>
                    <table className="product-details">
                      <tbody>
                        <tr>
                          <td>Precio por unidad</td>
                          <td>&#8353; {this.state.price}</td>
                        </tr>
                        <tr>
                          <td>Unidades en Stock</td>
                          <td>{this.state.stock}</td>
                        </tr>
                        <tr>
                          <td>Impuesto</td>
                          <td>{this.state.tax}  %</td>
                        </tr>
                        <tr>
                          <td>Cantidad</td>
                          <td>
                            <div className="stepper-input">
                              <span className="decrement">-</span>
                              <input className="quantity" value={this.state.count} />
                              <span className="increment">+</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <span className={this.state.added ? "btn btn-danger" : "btn btn-primary"}
                    >
                      {this.state.added ? "Quitar del carrito" : "Agregar al carrito"}
                    </span> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;