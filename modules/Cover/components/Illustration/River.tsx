import clsx from "clsx";
import styles from "../../styles/River.module.scss";

export const River = () => {
  return (
    <>
      <svg
        viewBox="0 0 194 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.river}
      >
        <path
          d="M76.0001 235C77.6001 234.2 76.6667 190 76.0001 168C77 159 71.7715 126.833 78.5002 121.5C111.167 129.667 194.6 131.6 193 132C191.4 132.4 190.333 216 190.5 238.5C151.667 237.667 74.4001 235.8 76.0001 235Z"
          fill="#235667"
        />
        <path
          d="M163 3.99998C150.2 -6.40002 33 18.5 0 8.49998L2.5 56H69.5C69.4507 65.8053 69.9641 96 73 115.5L75 134.5C83.1327 129.667 128 132 146 164.5C158.597 187.245 193 132 193 132C193 132 190.717 126.5 193 112.5C193.717 84 193.549 68.226 193 56L163 3.99998Z"
          fill="#90C4BC"
        />
        <path
          d="M67.5 9.00001C30.7 12.6 7.16667 10.5 0 9.00001C12.6656 18.3484 22.1044 39.5733 36 43.5C45.1437 46.0839 44.1638 21.2164 77 24.5C112 28 148.667 14.8333 170 17L161.5 3.00001C129.5 -2.99999 113.5 4.50001 67.5 9.00001Z"
          fill="#AACCC4"
        />
      </svg>
      <div className={clsx(styles["river-bubble"], styles["river-bubble-1"])} />
      <div className={clsx(styles["river-bubble"], styles["river-bubble-2"])} />
      <div className={clsx(styles["river-bubble"], styles["river-bubble-3"])} />
    </>
  );
};
