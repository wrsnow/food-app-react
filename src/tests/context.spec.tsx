import {
  render,
  fireEvent,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import TestPage from "../TestPage";
import { CartContextProvider } from "../context/ShoppingCartContext";

describe("Cart Context Actions", () => {
  beforeEach(() => {
    render(
      <CartContextProvider>
        <TestPage />
      </CartContextProvider>
    );
  });

  it("should add to cart", () => {
    const addButton = screen.getByText("ADD");
    const display = screen.getByTestId("paragraph");
    act(() => {
      fireEvent.click(addButton);
    });
    expect(display).toBeInTheDocument();
    expect(display).toHaveTextContent("Apple");
  });

  it("should remove a item from cart", () => {
    const removeButton = screen.getByText("REMOVE");
    act(() => fireEvent.click(removeButton));

    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  });

  it("should clear the cart", () => {
    const display = screen.getByTestId("paragraph");
    const addButton = screen.getByText("ADD");
    act(() => {
      fireEvent.click(addButton);
    });
    act(() => {
      fireEvent.click(addButton);
    });
    act(() => {
      fireEvent.click(addButton);
    });
    act(() => {
      fireEvent.click(screen.getByText("CLEAR"));
    });
    expect(display).not.toHaveTextContent("Cart Items");
    expect(display).toHaveTextContent("Cart is empty");
  });
});
