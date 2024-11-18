import { useState } from "react";
import { createPortal } from "react-dom";
import { FavouritesModal } from "src/components/FavouritesModal";

export function useFavouritesModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Modal = () => {
    return isModalOpen
      ? createPortal(
          <FavouritesModal closeModal={closeModal} />,
          document.getElementById("overlay")
        )
      : null;
  };

  return {
    showModal,
    Modal,
  };
}
