import React, { useReducer } from "react";
import axios from "axios";

import UserContext from "./userContext";
import UserReducer from "./UserReducer";

import { LOGIN_USER, LOGOUT_USER } from "../types";

const UserState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // get users
  const getUsers = async () => {
    axios.get("http://localhost:8000/api/v1/users/").then((response) => {
      dispatch({
        type: GET_USERS,
        payload: response.users,
      });
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
