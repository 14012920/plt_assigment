import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  Product,
  ProductsDispatchTypes,
} from "../ActionsType/ProductsActionsType";

export interface PDefaultState {
  error: string;
  products: Product[];
}

const intialState: PDefaultState = {
  products: [],
  error: "",
};
const ProductsReducer = (
  state = intialState,
  action: ProductsDispatchTypes
) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default ProductsReducer;
