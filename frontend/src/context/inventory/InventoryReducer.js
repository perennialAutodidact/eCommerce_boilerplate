import { GET_CATEGORIES, GET_PRODUCTS } from "../types";

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_PRODUCTS:
      return action.payload;
    case GET_CATEGORIES:
      return action.payload;
  }
};
