import styles from "../../styles/Illustration.module.scss";

export const WaterFlow = () => {
  return (
    <svg
      viewBox="0 0 704 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.flow}
    >
      <path
        d="M702 296C657.333 253.5 518.2 175.4 319 203C119.8 230.6 24.3333 144.167 1.5 97.5"
        strokeWidth="3"
        className={styles["flow--big"]}
      />
      <path
        d="M702 305C657.333 262.5 518.2 184.4 319 212C119.8 239.6 24.3333 153.167 1.5 106.5"
        strokeWidth="3"
        className={styles["flow--big"]}
      />
      <path
        d="M634 42.5C561.667 6.00003 386.4 -38.9 264 73.5"
        strokeWidth="3"
        className={styles["flow--small"]}
      />
      <path
        d="M634 78.4571C561.667 41.9571 386.4 -2.94288 264 109.457"
        strokeWidth="3"
        className={styles["flow--small"]}
      />
    </svg>
  );
};
