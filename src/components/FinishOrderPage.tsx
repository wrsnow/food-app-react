import { useContext, useEffect } from "react";
import { Quantity } from "./Card";
import { ModalContext } from "./context/ModalContext";
import styles from "./css_modules/FinishOrderPage.module.css";

type Props = {
  total: Quantity[];
};

const FinishOrderPage = (props: Props) => {
  const totalValue = props.total.reduce(
    (acc, val) => acc + val.quantity * val.price,
    0
  );

  const modalCTX = useContext(ModalContext);

  return (
    <div className={styles.main_wrapper}>
      <div className="">
        <h2>Your order has been confirmed.</h2>
        <ul className={styles.items}>
          {props.total.map((item: Quantity) => {
            if (item.quantity === 0) {
              return;
            }
            return (
              <li key={item.id} className={styles.item}>
                <span>{item.name}</span>
                <span>x {item.quantity}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.total}>
          <div className={styles.total_value}>
            <span>Total:</span>
            <span>${totalValue.toFixed(2)}</span>
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
