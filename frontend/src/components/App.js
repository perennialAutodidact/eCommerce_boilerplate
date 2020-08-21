import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';

import UserList from '../components/users/UserList';
import ProductList from './inventory/ProductList';
import ProductDetail from '../components/inventory/ProductDetail';

import '../../node_modules/bootstrap/dist/js/bootstrap';
import $ from 'jquery';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      products: [],
      currentProduct: null,
      categories: [],
    };
  }

  componentDidMount() {
    // get users
    axios.get('http://localhost:8000/api/v1/users/').then(response => {
      this.setState({
        users: response.data,
      });
    });

    // get products
    axios
      .get('http://localhost:8000/api/v1/inventory/products')
      .then(response => {
        this.setState({
          products: response.data,
        });

        let jewelry = this.state.products.filter(product =>
          product.categories.includes(1)
        );
      });

    // get categories
    axios
      .get('http://localhost:8000/api/v1/inventory/categories')
      .then(response => {
        this.setState({
          categories: response.data,
        });
      });

    // initiate Bootstrap tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  getProduct = id => {
    axios.get(`/inventory/products/${id}`).then(response => {
      this.setState({
        currentProduct: response.data,
      });
      console.log(this.state.currentProduct);
    });
  };

  loginUser = (username, password) => {};

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container-fluid'>
          <div className='content'>
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <ProductList products={this.state.products} />
                </Route>
                <Route path='/products/:id' component={ProductDetail}></Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
