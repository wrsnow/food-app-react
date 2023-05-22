import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import ProductsPrice from "../components/db/ProductsPrice";

export default function getTotalPrice() {
  const { cartItems } = useContext(CartContext);
  const totalPrice = Array.from(cartItems.entries()).map(([key, val]) => {
    console.log(`key: ${key}
    val: ${val}
    `);
    console.log(ProductsPrice.get(key));
    const itemPrice = ProductsPrice.get(key) as number;
    console.log("itemPrice", itemPrice);
    return val * itemPrice;
  });
  return totalPrice.reduce((a, b) => a + b, 0);
}
