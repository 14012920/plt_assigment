import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";

export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

export type Product = {
  id: string;
  name: string;
  colour: string;
  price: number;
  img: string;
};

export type ProductsType = {
  Products: Product[];
};

export interface ProductFetchSuccess {
  type: typeof FETCH_PRODUCT_SUCCESS;
  payload: ProductsType;
}

export interface ProductFetchFailure {
  type: typeof FETCH_PRODUCT_FAILURE;
  payload: string;
}
export const useAppDispatch: () => AppDispatch = useDispatch;
export type ProductsDispatchTypes = ProductFetchFailure | ProductFetchSuccess;
