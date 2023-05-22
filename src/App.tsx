import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import FinishOrderPage from "./components/FinishOrderPage";
import ModalContextProvider from "./context/ModalContext";
import ModalContainer from "./components/Modal";
import Processing from "./components/Processing";

// TODO: Find smaller images and add to the static database.

function App() {
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
        <Navbar setIsLoading={setIsLoading} />
        <MainWrapper />
        {!isLoading && (
          <ModalContainer>
            <FinishOrderPage />
          </ModalContainer>
        )}
        {isLoading && <Processing />}
      </ModalContextProvider>
    </>
  );
}

export default App;
