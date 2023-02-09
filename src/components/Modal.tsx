import { ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./context/ModalContext";
import styles from "./css_modules/Modal.module.css";

type Props = {
  children: ReactNode;
};

const Backdrop = () => {
  const modalCTX = useContext(ModalContext);
  return (
    <div
      onClick={() => modalCTX?.setIsModalOpen(false)}
      className={styles.backdrop}
    ></div>
  );
};

const Modal = (props: Props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const ModalContainer = (props: Props) => {
  const modalCTX = useContext(ModalContext);

  return (
    <>
      {modalCTX?.isModalOpen &&
        createPortal(
          <Backdrop />,
          document.getElementById("backdrop") as HTMLElement
        )}
      {modalCTX?.isModalOpen &&
        createPortal(
          <Modal children={props.children} />,
          document.getElementById("modal") as HTMLElement
        )}
    </>
  );
};

export default ModalContainer;
