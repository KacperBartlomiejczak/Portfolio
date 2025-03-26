import { useSelector } from "react-redux";
import Header from "./components/Header/Header.tsx";
import Modal from "./components/Modal/Modal.tsx";

import { RootState } from "./redux/store.ts";

function App() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <main className="min-h-screen flex justify-center items-center flex-col relative max-h-screen">
      <div className="gradient-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen ? <Modal /> : undefined}
      <Header />
    </main>
  );
}

export default App;
