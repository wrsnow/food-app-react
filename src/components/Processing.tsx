import React from "react";
import styles from "./css_modules/Processing.module.css";
import ModalContainer from "./Modal";

type Props = {};

const Processing = (props: Props) => {
  return (
    <ModalContainer>
      <div className={styles.container}>
        <span className={styles.loader}></span>
      </div>
    </ModalContainer>
  );
};

export default Processing;
