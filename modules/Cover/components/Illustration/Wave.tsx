import clsx from "clsx";

import styles from "../../styles/Wave.module.scss";

export const Wave = () => {
  return (
    // <div className={styles["wave-container"]}>
    <>
      <div className={clsx(styles.wave, styles["wave-1"])} />
      <div className={clsx(styles.wave, styles["wave-2"])} />
      <div className={clsx(styles.wave, styles["wave-3"])} />
      <div className={clsx(styles.wave, styles["wave-4"])} />
    </>
    // </div>
  );
};
