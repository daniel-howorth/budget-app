import React from "react";
import styles from "./VisuallyHidden.module.css";

const VisuallyHidden = ({ children, ...delegated }) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    // Use import.meta.env.MODE instead of process.env.NODE_ENV in Vite apps
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (ev) => {
        if (ev.key === "Alt") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <span className={styles["visually-hidden"]} {...delegated}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
