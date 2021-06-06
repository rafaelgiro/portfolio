import styles from "../../styles/Sky.module.scss";

export const Sky = () => {
  return (
    <>
      <div className={styles.circle}>
        <div className={styles["circle__details--1"]} />
        <div className={styles["circle__details--2"]} />
        <div className={styles["circle__details--3"]} />
      </div>
      <svg
        className={styles["first-cloud"]}
        viewBox="0 0 169 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M169 46H0.113286C-1.99049 24.5906 25.7287 6.63305 39.8513 0.330469C50.604 -2.46206 72.5768 13.1296 82.2191 21.2745C101.504 33.7827 117.282 25.9287 120.496 23.6016C123.067 21.7399 129.749 21.2745 132.768 21.2745C148.897 22.438 163.643 38.243 169 46Z"
          fill="white"
        />
      </svg>
      <svg
        className={styles["second-cloud"]}
        viewBox="0 0 133 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1364 11.5112C11.6879 22.2892 3.35859 26.9946 0 28H133C129.937 7.24819 111.438 7.42246 102.571 10.1036C100.086 13.7901 93.0597 18.2273 84.8379 6.48407C76.6161 -5.2592 66.6343 1.59104 62.6712 6.48407C55.7525 15.2647 39.9 29.8902 31.8394 18.1469C23.7788 6.40364 19.3455 8.83005 18.1364 11.5112Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default Sky;
