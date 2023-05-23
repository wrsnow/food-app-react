import { useContext } from "react";
import { CartContext } from "./context/ShoppingCartContext";

function TestPage() {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const foodOptions = ["Apple"];

  function add() {
    const randomOpt = Math.floor(Math.random() * foodOptions.length);
    addToCart(foodOptions[randomOpt]);
  }
  function remove() {
    const randomOpt = Math.floor(Math.random() * foodOptions.length);
    removeFromCart(foodOptions[randomOpt]);
  }

  return (
    <div>
      <button onClick={add}>ADD</button>
      <button onClick={remove}>REMOVE</button>
      <button onClick={clearCart}>CLEAR</button>

      {cartItems.size > 0 ? (
        <p data-testid="paragraph">
          Cart Items: {Array.from(cartItems.keys()).join(",")}
        </p>
      ) : (
        <p data-testid="paragraph">Cart is empty</p>
      )}

      <hr />
      <div></div>
    </div>
  );
}

export default TestPage;
