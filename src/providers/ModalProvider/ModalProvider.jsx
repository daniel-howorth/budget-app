import React from "react";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";

export const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle();

  const modal = (
    <Modal isOpen={isModalOpen} handleDismiss={() => toggleIsModalOpen(false)}>
      <div>Hello, World!</div>
    </Modal>
  );

  const value = { modal, isModalOpen, toggleIsModalOpen };

  return <ModalContext value={value}>{children}</ModalContext>;
}

export default ModalProvider;
