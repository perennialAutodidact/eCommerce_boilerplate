import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLogin extends Component {
  render() {
    return (
      <div>
        <form className="">
          <div className="form-group">
            <input
              className="form-control-lg"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control-lg"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control btn btn-sm btn-dark mx-auto"
              type="submit"
              value="Log In"
            />
          </div>
        </form>
        <div className="text-center" href="#">
          New around here? <Link to="/signup">Sign Up</Link>
        </div>
        <div className="text-center" href="#">
          Forgot password? <Link>Reset</Link>
        </div>
      </div>
    );
  }
}

export default NavLogin;
