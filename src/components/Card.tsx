import { useEffect, useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import styles from "./css_modules/Card.module.css";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  total: Quantity[];
  setTotal: React.Dispatch<React.SetStateAction<Quantity[]>>;
};

export type Quantity = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};
const Card = (props: Props) => {
  const [foodQuantity, setFoodQuantity] = useState<Quantity>({
    id: props.id,
    name: props.name,
    quantity: 0,
    price: props.price,
  });

  useEffect(() => {
    let timeout = setTimeout(() => {
      let arr = props.total;
      let findIndex = arr.findIndex((item) => item.id === foodQuantity.id);
      if (findIndex >= 0) {
        arr = arr.map((item, idx) => (idx === findIndex ? foodQuantity : item));
        props.setTotal(arr);
        sessionStorage.setItem("cart_items", JSON.stringify(arr));
      } else {
        arr.push(foodQuantity);
        props.setTotal(arr);
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [foodQuantity]);

  function addCurrentItem() {
    setFoodQuantity((prev: Quantity) => {
      return {
        ...prev,
        quantity: prev.quantity + 1,
      };
    });
  }
  function removeCurrentItem() {
    if (foodQuantity.quantity === 0) return;
    setFoodQuantity((prev: Quantity) => {
      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  }

  return (
    <div className={styles.card}>
      <div className={styles.food_info}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={removeCurrentItem}>
          <BsDashLg />
        </button>
        <span>
          Quantity:{" "}
          <strong className={styles.quantity}>{foodQuantity.quantity}</strong>
        </span>
        <button onClick={addCurrentItem}>
          <BsPlusLg />
        </button>
      </div>
    </div>
  );
};

export default Card;
