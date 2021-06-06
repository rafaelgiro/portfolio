import { useContext } from "react";
import clsx from "clsx";

import { ThemeContext } from "../../../Layout/context/ThemeContext";

import styles from "../../styles/Wave.module.scss";

export const Wave = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={clsx(styles.wave, styles["wave-1"], styles[theme])} />
      <div className={clsx(styles.wave, styles["wave-2"], styles[theme])} />
      <div className={clsx(styles.wave, styles["wave-3"], styles[theme])} />
      <div className={clsx(styles.wave, styles["wave-4"], styles[theme])} />
    </>
  );
};
