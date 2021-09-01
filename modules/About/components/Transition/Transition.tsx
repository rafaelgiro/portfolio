import clsx from "clsx";
import { useContext } from "react";

import { ThemeContext } from "../../../Layout/context/ThemeContext";

import styles from "../../styles/Transition.module.scss";

export const Transition = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles["about-me-transition"]}>
      <div className={clsx(styles.curve, styles[theme])} />
      <div className={clsx(styles.leaves, styles[theme])} />
    </div>
  );
};
