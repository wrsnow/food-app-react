import App from "../App";
import {
  screen,
  render,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { CartContextProvider } from "../context/ShoppingCartContext";

describe("Render App and test functions", () => {
  beforeEach(() => {
    render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );
  });
  it("should render navbar", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render cards and each card should have an img", () => {
    const cards = screen.getAllByTestId("product");
    expect(cards.length).toBe(10);
    cards.forEach((card) => {
      let img = card.querySelector("img");
      expect(img?.getAttribute("src")).toBeTruthy();
      expect(img?.getAttribute("alt")).toBeTruthy();
    });
  });

  it("should increase the cart items when when the button '+' was pressed", () => {
    const card = screen.getAllByTestId("product")[0];
    const cardQuantity = card.querySelector("span");
    act(() => fireEvent.click(card.querySelectorAll("button")[1]));
    expect(cardQuantity).toHaveTextContent("Quantity: 1");
    act(() => fireEvent.click(card.querySelectorAll("button")[1]));
    expect(cardQuantity).toHaveTextContent("Quantity: 2");
  });

  it("should decrease the card items when the button '-' was pressed", () => {
    const card = screen.getAllByTestId("product")[0];
    const cardQuantity = card.querySelector("span");
    act(() => fireEvent.click(card.querySelectorAll("button")[1]));
    act(() => fireEvent.click(card.querySelectorAll("button")[1]));
    act(() => fireEvent.click(card.querySelectorAll("button")[1]));
    expect(cardQuantity).toHaveTextContent("Quantity: 3");
    act(() => fireEvent.click(card.querySelectorAll("button")[0]));
    expect(cardQuantity).toHaveTextContent("Quantity: 2");
    act(() => fireEvent.click(card.querySelectorAll("button")[0]));
    expect(cardQuantity).toHaveTextContent("Quantity: 1");
    act(() => fireEvent.click(card.querySelectorAll("button")[0]));
    expect(cardQuantity).toHaveTextContent("Quantity: 0");
    act(() => fireEvent.click(card.querySelectorAll("button")[0]));
    expect(cardQuantity).toHaveTextContent("Quantity: 0");
  });
});
