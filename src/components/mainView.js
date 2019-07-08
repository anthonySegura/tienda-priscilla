import React, { Component } from 'react';
import Header from './header';
import Paginator from './pagination';
import Product from './product';
import { getProducts } from '../api_requests/requests';
import { Container, Row, Col } from 'react-bootstrap';

class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      currentProducts: [],
      currentPage: null,
      totalPages: null
    }
  }

  async componentDidMount() {
    let products = await getProducts();
    this.setState({
      allProducts: products.products
    });
  }

  onPageChanged = data => {
    console.log('page changed');
    const { allProducts: allProducts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({
      currentPage: currentPage,
      currentProducts: currentProducts,
      totalPages: totalPages,
      currentProducts: currentProducts
    });
  }

  renderProducts() {
    return (
      <div className="container">
        <div className="row">
          {
            this.state.currentProducts.map((p, i) => {
              return (
                <Product key={i}
                  name={p.name}
                  img={p.img}
                  price={p.price}
                  tax={p.tax} />
              )
            })
          }
        </div>
      </div>
    )
  }

  render() {
    const { allProducts, currentProducts, currentPage, totalPages } = this.state;
    const totalProducts = allProducts.length;
    if (totalProducts === 0) return null;
    return (
      <div>
        <Header />
        {this.renderProducts()}
        <Paginator totalRecords={totalProducts} pageLimit={10} pageNeighbours={1} onPageChanged={this.onPageChanged} />
      </div>
    );
  }
}

export default MainView;