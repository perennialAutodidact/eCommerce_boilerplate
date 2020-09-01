import React, { useReducer } from "react";
import axios from "axios";

import UserContext from "./userContext";
import UserReducer from "./UserReducer";

import { LOGIN_USER, LOGOUT_USER } from "../types";

const UserState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getCSRFToken = () => {
    axios.get("http://localhost:8000/csrf_token/").then((response) => {
      console.log(response.data);
    });
  };

  const loginUser = (email, password) => {
    const data = {
      email: email,
      password: password,
    };
    const headers = {
    //   "X-CSRFToken": Cookies.get("csrftoken"),
    };

    const url = "http://localhost:8000/login/";
    axios.post(url, headers, data).then((response) => {
      console.log("response", response);
    });
  };

  const logoutUser = () => {
    const url = "localhost:8000/logout";
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
