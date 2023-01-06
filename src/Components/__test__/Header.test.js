import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import Header from "../Header";

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

describe("render Header Screen", () => {
  beforeEach(() => {});

  test("render Header Screen", () => {
    const props = {
      title: "Products",
      cartCount: 0,
      onpressCart: jest.fn(),
      goBack: jest.fn(),
      type: "products",
      cartTotal: 0,
    };
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render Header for product Screen", () => {
    const props = {
      title: "Products",
      cartCount: 0,
      onpressCart: jest.fn(),
      goBack: jest.fn(),
      type: "products",
      cartTotal: 0,
    };
    const { getByText } = render(<Header {...props} />);
    expect(getByText("Products")).toBeTruthy();
  });
});
