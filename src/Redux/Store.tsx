import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { RootReducer } from "./Reducers/RootReducer";
import thunk from "redux-thunk";

export const Store = createStore(RootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
