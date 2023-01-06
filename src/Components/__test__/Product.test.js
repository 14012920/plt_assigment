import React from "react";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react-native";
import { useSelector, useDispatch } from "react-redux";
import renderer from "react-test-renderer";
import Product from "../Product";

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
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
const props = {
  item: {
    id: 1,
    colour: "Black",
    name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
    price: 10,
    img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
    qty: 1,
  },
  onPressAdd: jest.fn(),
};
describe("render Product Screen", () => {
  beforeEach(() => {});

  test("snapshot of product screen", () => {
    const tree = renderer.create(<Product {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render Header for product Screen", () => {
    const { getByText } = render(<Product {...props} />);
    const button = getByText("ADD+");
    fireEvent.press(button);
    expect(props.onPressAdd).toHaveBeenCalled();
  });
});
