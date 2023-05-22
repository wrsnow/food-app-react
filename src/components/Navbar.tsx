import { useState, useContext } from "react";
import styles from "./css_modules/Navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import CartDropdown from "./Cart/CartDropdown";
import { CartContext } from "../context/ShoppingCartContext";

type Props = {
  setIsLoading: (load: boolean) => void;
};

const Navbar = (props: Props) => {
  const { cartItems } = useContext(CartContext);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const totalQuantity = Array.from(cartItems.values()).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.nav_logo}>
        Food App
      </a>
      <div className={styles.cart_wrapper}>
        <button onClick={() => setIsDropdownActive(!isDropdownActive)}>
          <BsCart4 />
          <span>{totalQuantity}</span>
        </button>
        <CartDropdown
          setIsLoading={props.setIsLoading}
          isDropdownActive={isDropdownActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
