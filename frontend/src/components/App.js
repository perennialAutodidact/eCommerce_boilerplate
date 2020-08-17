import React, { Component } from "react";
import "../../node_modules/normalize.css";
import Navbar from "./layout/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: false,
    };
  }

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
      </div>
    );
  }
}

export default App;
