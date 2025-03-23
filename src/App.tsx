import Header from "./components/Header/Header.tsx";
import Modal from "./components/Modal/Modal.tsx";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openHandler() {
    setIsOpen(true);
  }
  function closeHandler() {
    setIsOpen(false);
  }
  return (
    <main className="min-h-screen flex justify-center items-center flex-col relative max-h-screen">
      <div className="gradient-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen ? <Modal onClose={closeHandler} /> : undefined}
      <Header onOpen={openHandler} />
    </main>
  );
}

export default App;
