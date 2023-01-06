import { ADD_TO_CART, REMOVE_TO_CART } from "../ActionsType/CartActionType";
export const addToCart = (data: any) => {
  return { type: ADD_TO_CART, payload: data };
};
export const removeToCart = (data: any) => {
  return { type: REMOVE_TO_CART, payload: data };
};
