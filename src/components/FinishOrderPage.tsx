import { useContext, useEffect } from "react";
import { ModalContext } from "../context/ModalContext";
import styles from "./css_modules/FinishOrderPage.module.css";
import { useCartCtx } from "../context/ShoppingCartContext";
import getTotalPrice from "../utils/getTotalPrice";

const FinishOrderPage = () => {
  const { cartItems } = useCartCtx();
  const totalPrice = getTotalPrice();

  const modalCTX = useContext(ModalContext);

  return (
    <div className={styles.main_wrapper}>
      <div className="">
        <h2>Your order has been confirmed.</h2>
        <ul className={styles.items}>
          <>
            {Array.from(cartItems.entries()).map(([name, quantity]) => {
              if (quantity === 0) {
                return;
              }
              return (
                <li key={name} className={styles.item}>
                  <span>{name}</span>
                  <span>x {quantity}</span>
                </li>
              );
            })}
          </>
        </ul>
        <div className={styles.total}>
          <div className={styles.total_value}>
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={() => modalCTX?.setIsModalOpen(false)}
            className={styles.confirm_btn}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishOrderPage;
