import React from "react";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";

export const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle();
  const [modalContent, setModalContent] = React.useState(null);
  const [actionTarget, setActionTarget] = React.useState();

  function openModal(content) {
    setModalContent(content);
    toggleIsModalOpen(true);
  }

  function closeModal() {
    setModalContent(null);
    toggleIsModalOpen(false);
  }

  const modal = (
    <Modal
      isOpen={isModalOpen}
      handleDismiss={() => {
        closeModal();
      }}
    >
      {modalContent}
    </Modal>
  );

  const value = {
    modal,
    isModalOpen,
    actionTarget,
    openModal,
    closeModal,
    setActionTarget,
  };

  return <ModalContext value={value}>{children}</ModalContext>;
}

export default ModalProvider;
