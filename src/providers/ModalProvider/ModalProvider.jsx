import React from "react";
import useToggle from "../../hooks/useToggle";

export const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle();

  const value = { isModalOpen, toggleIsModalOpen };

  return <ModalContext value={value}>{children}</ModalContext>;
}

export default ModalProvider;
