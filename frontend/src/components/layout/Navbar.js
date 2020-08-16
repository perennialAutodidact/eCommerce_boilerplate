import React, { Component } from "react";
import NavLogin from "./NavLogin";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li className="nav-link">Home</li>
        </ul>
        <NavLogin />
      </div>
    );
  }
}

export default Navbar;
