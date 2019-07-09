import React, { Component } from 'react';
import Header from './header';
import Paginator from './pagination';
import Product from './product';
import { getProducts } from '../api_requests/requests';
import store from '../redux_store/state';
import {update_products} from '../redux_store/actions';

class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      currentProducts: [],
      currentPage: null,
      totalPages: null
    }
    // Se enlaza el estado del componente al estado global de la aplicación
    // para cuando se actualiza los productos en las busquedas se refresque este vista
    store.subscribe(() => {
      this.setState({
        allProducts: store.getState().products
      })
    });
  }

  async componentDidMount() {
    let products = await getProducts();
    store.dispatch(update_products(products.products))
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
                  id={p.id}
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
        <Paginator totalRecords={totalProducts}
          pageLimit={10}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged} />
      </div>
    );
  }
}

export default MainView;