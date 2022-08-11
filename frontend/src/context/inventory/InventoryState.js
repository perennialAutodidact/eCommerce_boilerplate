import React, { useReducer } from "react";
import axios from "axios";

import InventoryContext from "./InventoryContext";
import InventoryReducer from "./InventoryReducer";

import { GET_PRODUCTS, GET_CATEGORIES } from "../types";

const InventoryState = (props) => {
  const initialState = {
    products: [],
    categories: [],
  };

  const [state, dispatch] = useReducer(InventoryReducer, initialState);

  const getProducts = async () => {
    // get products
    await axios
      .get("http://localhost:8000/api/v1/inventory/products")
      .then((response) => {
        dispatch({
          products: GET_PRODUCTS,
          payload: response.data,
        });
      });
  };
  const getCategories = async () => {
    // get categories
    await axios
      .get("http://localhost:8000/api/v1/inventory/categories")
      .then((response) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data,
        });
      });
  };
  return (
    <InventoryContext.Provider
      value={{
        getCategories,
        getProducts,

      }}
    >
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryState;
