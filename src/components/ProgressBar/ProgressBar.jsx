import React from "react";
import { Progress } from "radix-ui";
import styles from "./ProgressBar.module.css";
import clsx from "clsx";

function ProgressBar({ value = 0, max = 100, className, delegated }) {
  const progress = (value / max) * 100;

  let indicatorColor;

  if (progress >= 100) {
    indicatorColor = "critical";
  } else if (progress >= 70) {
    indicatorColor = "warning";
  } else {
    indicatorColor = "safe";
  }

  const rootClassName = clsx(styles["progress-root"], className);
  const indicatorClassName = clsx(
    styles["progress-indicator"],
    styles[indicatorColor]
  );

  return (
    <Progress.Root
      className={rootClassName}
      {...delegated}
      value={value}
      max={max}
    >
      <Progress.Indicator
        className={indicatorClassName}
        style={{ width: `${progress}%` }}
      />
    </Progress.Root>
  );
}

export default ProgressBar;
