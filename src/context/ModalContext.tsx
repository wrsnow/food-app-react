import { createContext, useState, ReactNode, useEffect } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (modal: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider(props: Props) {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpened]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: isModalOpened,
        setIsModalOpen: setIsModalOpened,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
