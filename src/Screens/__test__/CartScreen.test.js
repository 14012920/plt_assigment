import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";
import * as redux from "react-redux";
import { CartScreen } from "../CartScreen";
import { renderWithProviders } from "../testUtils";

jest.mock("react-native-safe-area-context", () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };

  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
jest.mock("react-native-safe-area-context", () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };

  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

const mockedDispatch = jest.fn();
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe("render cart Screen", () => {
  beforeEach(() => {
    const mockedState = {
      cart: { cart: [], cartTotal: 10, cartCount: 0 },
    };
    redux.useSelector.mockImplementation((callback) => {
      return callback(mockedState);
    });
    mockedDispatch.mockClear();
  });
  test("showing cart empty", () => {
    renderWithProviders(<CartScreen />);
    expect(screen.getByText("Cart is Empty")).toBeTruthy();
  });

  test("showing card items", () => {
    const onPressMock = jest.fn();
    const mockedState2 = {
      cart: {
        cart: [
          {
            id: 1,
            colour: "Black",
            name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
            price: 10,
            img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
            qty: 1,
          },
        ],
        cartTotal: 10,
        cartCount: 0,
      },
    };
    redux.useSelector.mockImplementation((callback) => {
      return callback(mockedState2);
    });
    const itemData = {
      id: 1,
      colour: "Black",
      name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
      price: 10,
      img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
      qty: 1,
    };

    const { getByTestId } = renderWithProviders(<CartScreen />);
    expect(getByTestId("flatlist")).toBeDefined();
  });
});
