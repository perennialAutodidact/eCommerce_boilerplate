import React, { Component } from "react";
import NavLogin from "./NavLogin";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li className="nav-link">Home</li>
        </ul>
        {this.props.showLoginForm ? (
          <NavLogin toggleLoginForm={this.props.toggleLoginForm} />
        ) : (
          <div className="loginFormToggle" onClick={this.props.toggleLoginForm}>
            Log In
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
