import { GitHub } from "../../components/Icons";
import { Typography } from "../../components/Typography";
import styles from "./styles/Lucy.module.scss";

export const Lucy = () => {
  return (
    <div className={styles["lucy"]}>
      <div className={styles["lucy__image"]}>
        <img width="100%" src="/lucy.jpg" alt="5pots homepage" />
      </div>
      <a href="https://lucyds.vercel.app/" target="blank" rel="noreferrer">
        <Typography typeScale="eyebrown" component="h3">
          GO TO WEBSITE
        </Typography>
      </a>
      <Typography typeScale="title-2" component="h4">
        LUCY
        <a
          href="https://github.com/rafaelgiro/lucy"
          target="blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHub width="32" className={styles["lucy__icon"]} />
        </a>
      </Typography>
      <Typography typeScale="paragraph">
        A Colorful <strong>Design System</strong> with psychedelic effects using
        only CSS. Built with <strong>Turborepo</strong>, created inside a{" "}
        <strong>Storybook</strong> and hosting the documentation at{" "}
        <strong>Vercel</strong> with <strong>Next.js</strong>.
      </Typography>
    </div>
  );
};
