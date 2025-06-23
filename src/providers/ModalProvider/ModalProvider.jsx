import React from "react";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";
import AddBudgetForm from "../../components/Forms/AddBudgetForm";
import AddExpenseForm from "../../components/Forms/AddExpenseForm";

export const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle();
  const [modalAction, setModalAction] = React.useState();
  const [actionTarget, setActionTarget] = React.useState();

  console.log(actionTarget);

  const modal = (
    <Modal
      isOpen={isModalOpen}
      handleDismiss={() => {
        setModalAction("");
        toggleIsModalOpen(false);
      }}
    >
      {modalAction === "add-budget" && <AddBudgetForm />}
      {modalAction === "add-expense" && <AddExpenseForm />}
    </Modal>
  );

  const value = {
    modal,
    isModalOpen,
    toggleIsModalOpen,
    setModalAction,
    setActionTarget,
  };

  return <ModalContext value={value}>{children}</ModalContext>;
}

export default ModalProvider;
