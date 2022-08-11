import React, { Component, useContext } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Popper from "popper.js";
import { HashRouter, Switch, Route } from "react-router-dom";

import AppContext from "../context/main/AppContext";
import UserState from "../context/users/UserState";
import AppState from "../context/main/AppState";

import Navbar from "./layout/Navbar";
// import UserList from "../components/users/UserList";
import ProductList from "./inventory/ProductList";

const App = (props) => {
  return (
    <AppState>
      <UserState>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <div className="content">
              <HashRouter>
                <Switch>
                  <Route exact path="/">
                    <ProductList />
                    {/* <UserList users={this.state.users} /> */}
                  </Route>
                </Switch>
              </HashRouter>
            </div>
          </div>
        </div>
      </UserState>
    </AppState>
  );
};

export default App;
