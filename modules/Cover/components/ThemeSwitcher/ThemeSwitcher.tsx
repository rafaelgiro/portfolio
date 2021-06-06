import { Typography } from "../../../../components/Typography";

import styles from "../../styles/ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  return (
    <div className={styles["theme-switcher"]}>
      <Typography typeScale="eyebrown">Good night!</Typography>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </div>
  );
};
