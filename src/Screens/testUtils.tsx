import React from "react";
import { render } from "@testing-library/react-native";
import { legacy_createStore as createStore } from "redux";
import { RootReducer } from "../Redux/Reducers/RootReducer";
import { Provider } from "react-redux";

export function renderWithProviders(
  ui: any,
  {
    preloadedState = {},
    store = createStore(RootReducer),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
