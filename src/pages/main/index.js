import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default class Main extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    //console.log(response.data.docs);
    this.setState({ products: response.data.docs });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <h2>{product.title}</h2>
          </article>

        ))}
      </div>
    );
  }
}
