import { useContext } from "react";
import styles from "../css_modules/Navbar.module.css";
import { CartContext } from "../../context/ShoppingCartContext";

function CartTotal() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.size <= 0 && <li>Start by adding something...</li>}
      {Array.from(cartItems.entries()).map(([name, quantity]) => {
        if (quantity === 0) {
          return;
        }
        return (
          <li key={name}>
            <div className={styles.cart_item}>
              <span>{name}</span>
              <span>Quantity:</span>
              <span>{quantity}</span>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default CartTotal;
