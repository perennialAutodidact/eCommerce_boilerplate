import React, { Component } from "react";
import axios from "axios";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import UserList from "../components/users/UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/v1/users/").then((response) => {
      this.setState({
        users: response.data,
      });
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
                  <UserList users={this.state.users} />
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
