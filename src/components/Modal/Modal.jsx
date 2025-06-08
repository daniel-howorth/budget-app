import React from "react";
import { X as Close } from "react-feather";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import VisuallyHidden from "../VisuallyHidden";
import styles from "./Modal.module.css";

function Modal({ title, description, isOpen, handleDismiss, children }) {
  return (
    <Dialog className={styles.wrapper} open={isOpen} onClose={handleDismiss}>
      <div className={styles.backdrop} onClick={handleDismiss} />
      <DialogPanel className={styles.dialog}>
        <button className={styles.closeBtn} onClick={handleDismiss}>
          <Close />
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </button>
        {Boolean(title) && <DialogTitle>{title}</DialogTitle>}
        {Boolean(description) && <Description>{description}</Description>}
        {children}
      </DialogPanel>
    </Dialog>
  );
}

export default Modal;
