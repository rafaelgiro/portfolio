import { GitHub } from "../../components/Icons";
import { Typography } from "../../components/Typography";
import styles from "./styles/FivePots.module.scss";

export const FivePots = () => {
  return (
    <div className={styles["five-pots"]}>
      <div className={styles["five-pots__image"]}>
        <img width="100%" src="/5pots.jpg" alt="5pots homepage" />
        <svg
          viewBox="0 0 583 337"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M7.24586 2.66394L580.277 5.16125L582 329.677L1.677 328.476"
            fill="#242537"
          />
          <path
            d="M6.25743 3.3183C202.85 9.12754 401.553 7.64518 576.191 2.1431M4.25424 4.62705C118.836 0.0731357 232.537 1.22163 576.925 3.4652M581.118 3.78571C571.143 125.967 568.018 257.349 575.015 329.424M575.029 3.42513C574.214 112.853 577.566 222.814 575.576 333.604M577.072 331.894C359.459 332.629 146.574 335.994 1.59668 331.934M576.11 334.218C449.255 333.751 319.903 333.791 4.65488 332.215M7.96681 335.994C7.48605 212.812 2.05074 89.8693 2.90543 1.4353M3.50638 334.125C6.88509 260.888 5.08222 187.651 4.4145 3.49191"
            stroke="#242537"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <a href="https://lol.5pots.com/" target="blank" rel="noreferrer">
        <Typography typeScale="eyebrown" component="h3">
          GO TO WEBSITE
        </Typography>
      </a>
      <Typography typeScale="title-2" component="h4">
        5POTS
        <a
          href="https://github.com/rafaelgiro/timeline"
          target="blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHub width="32" className={styles["five-pots__icon"]} />
        </a>
      </Typography>
      <Typography typeScale="paragraph">
        Gaming news timeline built with <strong>React and Next.js</strong>.
        Built with <strong>Turborepo</strong>, each game has its own{" "}
        <strong>micro-frontend</strong> using components from a common package.
      </Typography>
    </div>
  );
};
