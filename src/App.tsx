import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Quantity } from "./components/Card";
import MainWrapper from "./components/MainWrapper";
import FinishOrderPage from "./components/FinishOrderPage";
import ModalContextProvider from "./components/context/ModalContext";
import ModalContainer from "./components/Modal";
import Processing from "./components/Processing";

function App() {
  const [total, setTotal] = useState<Quantity[]>([
    { id: "", name: "", quantity: 0, price: 0 },
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) return;
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, [isLoading]);

  return (
    <>
      <ModalContextProvider>
        <Navbar setIsLoading={setIsLoading} total={total} />
        <MainWrapper total={total} setTotal={setTotal} />
        {!isLoading && (
          <ModalContainer>
            <FinishOrderPage total={total} />
          </ModalContainer>
        )}
        {isLoading && <Processing />}
      </ModalContextProvider>
    </>
  );
}

export default App;
