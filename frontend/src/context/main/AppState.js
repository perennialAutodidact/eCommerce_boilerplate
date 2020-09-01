import React, { useReducer } from "react";
import axios from "axios";

// import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

import { LOGIN_USER, LOGOUT_USER } from "../types";

const AppState = (props) => {
  const initialState = {
      csrfToken: '',
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCSRFToken = () => {

    const url = "http://localhost:8000/csrf_token/";
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
