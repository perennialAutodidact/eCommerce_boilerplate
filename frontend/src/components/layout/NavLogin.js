import React from "react";

const NavLogin = () => {
  return (
    <form className="login-form">
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
};

export default NavLogin;
