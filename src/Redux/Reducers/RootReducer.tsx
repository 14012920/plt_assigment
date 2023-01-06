import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ListReducer from "./ProductsReducer";

export const RootReducer = combineReducers({
  products: ListReducer,
  cart: CartReducer,
});
