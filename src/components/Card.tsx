import { useEffect, useContext } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import styles from "./css_modules/Card.module.css";
import { CartContext } from "../context/ShoppingCartContext";

type Props = {
  name: string;
  description?: string;
  price: number;
  img?: string;
};

const Card = ({ name, price, description, img }: Props) => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  function addCurrentItem() {
    addToCart(name);
  }
  function removeCurrentItem() {
    removeFromCart(name);
  }

  const foodQuantity = cartItems.get(name) ?? 0;

  return (
    <div className={styles.card}>
      <img src={img} alt={name} width={200} loading="lazy" />
      <div className={styles.food_info}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={removeCurrentItem}>
          <BsDashLg />
        </button>
        <span>
          Quantity: <strong className={styles.quantity}>{foodQuantity}</strong>
        </span>
        <button onClick={addCurrentItem}>
          <BsPlusLg />
        </button>
      </div>
    </div>
  );
};

export default Card;
