import React, { Component } from "react";
import NavLogin from "./NavLogin";
import { Link, BrowserRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Money for Stuff
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div className="dropdown text-light">
              <div
                className="dropdown-toggle h5"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </div>
              <div
                className="dropdown-menu p-2"
                aria-labelledby="navbarDropdown"
              >
                <NavLogin />
              </div>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Navbar;
