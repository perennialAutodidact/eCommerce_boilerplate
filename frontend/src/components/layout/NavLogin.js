import React, { Component } from "react";

class NavLogin extends Component {
  render() {
    return (
      <form className="login-form">
        <div
          className="close-x unselectable"
          alt="close"
          onClick={this.props.toggleLoginForm}
        >
          &#10006;
        </div>
        <div className="form-group">
          <input type="text" name="username" placeholder="Username" />
        </div>

        <div className="form-group">
          <input type="password" name="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <input type="submit" value="Log In" />
        </div>
      </form>
    );
  }
}

export default NavLogin;
