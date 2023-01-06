import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../ActionsType/ProductsActionsType";

export const getProducts = () => {
  return (dispatch: any) => {
    fetch("https://my-json-server.typicode.com/benirvingplt/products/products")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: json });
      })
      .catch((e) => {
        dispatch({
          type: FETCH_PRODUCT_FAILURE,
          payload: "Something went wrong",
        });
        console.log("error", e);
      });
  };
};
