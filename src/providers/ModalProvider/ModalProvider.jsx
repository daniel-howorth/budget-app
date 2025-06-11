import React from "react";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";
import AddBudgetForm from "../../components/Forms/AddBudgetForm";

export const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle();
  const [modalAction, setModalAction] = React.useState("add-budget");

  const modal = (
    <Modal
      isOpen={isModalOpen}
      handleDismiss={() => {
        setModalAction("");
        toggleIsModalOpen(false);
      }}
    >
      {modalAction === "add-budget" && <AddBudgetForm />}
    </Modal>
  );

  const value = {
    modal,
    isModalOpen,
    toggleIsModalOpen,
    modalAction,
    setModalAction,
  };

  return <ModalContext value={value}>{children}</ModalContext>;
}

export default ModalProvider;
