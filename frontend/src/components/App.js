import React, { Component } from "react";
import axios from "axios";

import "../../node_modules/normalize.css";
import Navbar from "./layout/Navbar";
import UserList from "../components/users/UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/v1/users/").then((response) => {
      console.log("response", response);
    });
  }

  loginUser = (username, password) => {};

  toggleLoginForm = () => {
    this.setState({
      showLoginForm: !this.state.showLoginForm,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          showLoginForm={this.state.showLoginForm}
          toggleLoginForm={this.toggleLoginForm}
        />

        <UserList />
      </div>
    );
  }
}

export default App;
