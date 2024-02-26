import { useState } from "react";

import Modal from "./components/modal";
import Button from "./components/button";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <Button label="Upload Document" onClick={handleOpenModal} />
      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        modalWidth="lg"
      ></Modal>
    </main>
  );
}

export default App;
