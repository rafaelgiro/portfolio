import Link from "next/link";

import { Codepen, GitHub, LinkedIn, Logo } from "../../../../components/Icons";

import styles from "../../styles/LeftSideIcons.module.scss";

export const LeftSideIcons = () => {
  return (
    <div className={styles["left-side-icons"]}>
      <Logo className={styles.logo} />
      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/rafaelgiro/"
          target="blank"
          rel="noreferrer"
          className={styles["social--linkedin"]}
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/RafaelGiro/5pots"
          target="blank"
          rel="noreferrer"
          className={styles["social--github"]}
          aria-label="GitHub"
        >
          <GitHub />
        </a>
        <a
          href="https://codepen.io/rafaelgiro"
          target="blank"
          rel="noreferrer"
          className={styles["social--codepen"]}
          aria-label="Codepen"
        >
          <Codepen />
        </a>
      </div>
    </div>
  );
};
