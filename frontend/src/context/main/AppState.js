import React, { useReducer } from "react";
import axios from "axios";
import $ from "jquery";

import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

import { LOGIN_USER, LOGOUT_USER } from "../types";

const AppState = (props) => {
  const initialState = {
    csrfToken: "",
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const activateBootstrapTooltips = () => {
    // initiate Bootstrap tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  };

  const getCSRFToken = () => {
    const url = "http://localhost:8000/csrf-token/";

    const data = {
      djangoKey: process.env.DJANGO_SECRET_KEY_DEVELOPMENT,
    };

    console.log(data);

    axios.get((url = url), (data = data)).then((response) => {
      console.log(response);
    });
  };

  const loginUser = (email, password) => {};

  const logoutUser = () => {
    const url = "localhost:8000/logout";
  };

  return (
    <AppContext.Provider
      value={{
        loginUser,
        logoutUser,
        activateBootstrapTooltips,
        getCSRFToken,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
