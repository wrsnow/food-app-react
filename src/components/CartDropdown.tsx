import React, { useContext } from "react";
import { Quantity } from "./Card";
import ModalContextProvider, { ModalContext } from "./context/ModalContext";
import styles from "./css_modules/Navbar.module.css";

type Props = {
  totalQuantity: number;
  totalValue: number;
  total: Quantity[];
  isDropdownActive: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const CartDropdown = (props: Props) => {
  const modalCtx = useContext(ModalContext);

  function confirmAction(): void {
    modalCtx?.setIsModalOpen(true);
    props.setIsLoading(true);
  }

  return (
    <div
      className={`${styles.dropdown} ${
        props.isDropdownActive ? styles.active : ""
      }`}
    >
      <ul>
        {props.totalQuantity <= 0 && <li>Start by adding something...</li>}
        {props.total.map((item, idx) => {
          if (item.quantity === 0) {
            return;
          }
          return (
            <li key={item.id}>
              <div className={styles.cart_item}>
                <span>{item.name}</span>
                <span>Quantity:</span>
                <span>{item.quantity}</span>
              </div>
            </li>
          );
        })}
        <hr />
        {props.totalValue > 0 && (
          <li className={styles.cart_total}>
            Total: <strong>${props.totalValue.toFixed(2)}</strong>
          </li>
        )}
        {props.totalValue > 0 && (
          <li>
            <button onClick={confirmAction} className={styles.complete_btn}>
              Complete Order
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CartDropdown;
