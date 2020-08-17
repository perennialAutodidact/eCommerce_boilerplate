import React, { Component } from "react";
import NavLogin from "./NavLogin";
import { Link, BrowserRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <BrowserRouter>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {this.props.showLoginForm ? (
            <NavLogin toggleLoginForm={this.props.toggleLoginForm} />
          ) : (
            <div
              className="loginFormToggle"
              onClick={this.props.toggleLoginForm}
            >
              Log In
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default Navbar;
