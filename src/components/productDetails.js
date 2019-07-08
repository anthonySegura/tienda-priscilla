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
    let productDetails = await getProduct(params.id);
    this.setState({
      productDetails
    })
  }

  render() {
    return (
      <div>
        <Header />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default ProductDetails;