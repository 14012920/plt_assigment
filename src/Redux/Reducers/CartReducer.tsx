import {
  CartDispatchTypes,
  Cart,
  ADD_TO_CART,
  REMOVE_TO_CART,
} from "../ActionsType/CartActionType";

export interface IDefaultState {
  cart?: Cart[];
  cartCount: number;
  cartTotal: number;
}

export const defaultState: IDefaultState = {
  cartCount: 0,
  cartTotal: 0,
  cart: [],
};

const CartReducer = (
  state: IDefaultState = defaultState,
  action: CartDispatchTypes
) => {
  switch (action.type) {
    case ADD_TO_CART:
      let tempAdd = [...(state.cart as any[])];
      let cartTotal = 0;

      const updateIndex = tempAdd.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (updateIndex == -1) {
        let updateItem = { ...action.payload, qty: 1 };
        tempAdd.push(updateItem);
        cartTotal = state.cartTotal + action.payload.price;
        state.cartCount += 1;
      } else {
        cartTotal = state.cartTotal + action.payload.price;
        tempAdd[updateIndex].qty += 1;
      }
      return { ...state, cart: tempAdd, cartTotal: cartTotal };

    case REMOVE_TO_CART:
      let tempRemove = [...(state.cart as any[])];
      let cartTotal2 = 0;
      const newIndex = tempRemove.findIndex(
        (item: any) => item.id === action.payload.id
      );
      let item = tempRemove[newIndex];
      if (item.qty === 1) {
        tempRemove.splice(newIndex, 1);
        cartTotal2 = state.cartTotal - action.payload.price;
        state.cartCount -= 1;
      } else {
        tempRemove[newIndex].qty -= 1;
        cartTotal2 = state.cartTotal - action.payload.price;
      }
      return { ...state, cart: tempRemove, cartTotal: cartTotal2 };
    default:
      return state;
  }
};

export default CartReducer;
