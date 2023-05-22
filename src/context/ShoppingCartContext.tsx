import { createContext, useContext, useState } from "react";

const initialState = new Map<string, number>();

export const CartContext = createContext({
  cartItems: initialState,
  addToCart: (item: string) => {},
  removeFromCart: (item: string) => {},
  clearCart: () => {},
});

function useCart() {
  const [cartItems, setCartItems] = useState(initialState);

  function addToCart(item: string) {
    setCartItems((prev) => {
      const newCart = new Map(prev);
      if (newCart.has(item)) {
        newCart.set(item, (newCart.get(item) as number) + 1);
      } else {
        newCart.set(item, 1);
      }
      return newCart;
    });
  }
  function removeFromCart(item: string) {
    setCartItems((prev) => {
      let newCart = new Map(prev);
      if (newCart.has(item)) {
        let itemQuantity = newCart.get(item) ?? 0;
        if (itemQuantity >= 2) {
          newCart.set(item, itemQuantity - 1);
        } else {
          newCart.delete(item);
        }
      }
      return newCart;
    });
  }

  function clearCart() {
    setCartItems(new Map(initialState));
  }

  return { cartItems, addToCart, removeFromCart, clearCart };
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
