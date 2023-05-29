import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useCartCtx } from "../../context/ShoppingCartContext";
import styles from "../css_modules/Navbar.module.css";
import CartTotal from "./CartTotal";
import getTotalPrice from "../../utils/getTotalPrice";

type Props = {
  isDropdownActive: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const CartDropdown = ({ isDropdownActive, setIsLoading }: Props) => {
  const modalCtx = useContext(ModalContext);
  const { cartItems } = useCartCtx();
  const totalPrice = getTotalPrice();

  function confirmAction(): void {
    modalCtx?.setIsModalOpen(true);
    setIsLoading(true);
  }

  console.log(totalPrice);

  return (
    <div
      className={`${styles.dropdown} ${isDropdownActive ? styles.active : ""}`}
    >
      <ul>
        <CartTotal />
        <hr />
        {totalPrice > 0 && (
          <>
            <li className={styles.cart_total}>
              Total: <strong>${totalPrice.toFixed(2)}</strong>
            </li>
            <li>
              <button onClick={confirmAction} className={styles.complete_btn}>
                Complete Order
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CartDropdown;
