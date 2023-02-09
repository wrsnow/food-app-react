import React, { useState } from "react";
import styles from "./css_modules/Navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import { Quantity } from "./Card";
import CartDropdown from "./CartDropdown";

type Props = {
  setIsLoading: (load: boolean) => void;
  total: Quantity[];
};

const Navbar = (props: Props) => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const totalQuantity = props.total.reduce((acc, val) => acc + val.quantity, 0);
  const totalValue = props.total.reduce(
    (acc, val) => acc + val.quantity * val.price,
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
          total={props.total}
          totalQuantity={totalQuantity}
          totalValue={totalValue}
        />
      </div>
    </nav>
  );
};

export default Navbar;
