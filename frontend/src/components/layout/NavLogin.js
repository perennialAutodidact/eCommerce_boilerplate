import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../context/users/userContext";

const NavLogin = () => {
  const userContext = useContext(UserContext);

    const [text, setText] = useState({
        email:'',
        password:''
    })

    const onSubmit = e => {
        e.preventDefault();

        const email = e.target[0].value
        const password = e.target[1].value

        userContext.loginUser(email, password)
    }

  return (
    <div>
      <form className="" onSubmit={onSubmit}>
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
        Forgot password? <Link to="#">Reset</Link>
      </div>
    </div>
  );
};

export default NavLogin;
