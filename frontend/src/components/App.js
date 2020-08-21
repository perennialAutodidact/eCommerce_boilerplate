import React, { Component } from "react";
import axios from "axios";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import UserList from "../components/users/UserList";
import ProductList from "./inventory/ProductList";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import $ from "jquery";
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    // get users
    axios.get("http://localhost:8000/api/v1/users/").then((response) => {
      this.setState({
        users: response.data,
      });
    });

    // get products
    axios
      .get("http://localhost:8000/api/v1/inventory/products")
      .then((response) => {
        this.setState({
          products: response.data,
        });

        let jewelry = this.state.products.filter(
            product => product.categories.includes(1)
        );
    
        console.log(jewelry);
      });

    // get categories
    axios
      .get("http://localhost:8000/api/v1/inventory/categories")
      .then((response) => {
        this.setState({
          categories: response.data,
        });
      });

    // initiate Bootstrap tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

  }

  loginUser = (username, password) => {};

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="content">
            <HashRouter>
              <Switch>
                <Route exact path="/">
                  <ProductList products={this.state.products} />
                  {/* <UserList users={this.state.users} /> */}
                </Route>
              </Switch>
            </HashRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
