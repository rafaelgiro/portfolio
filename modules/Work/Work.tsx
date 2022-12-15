import clsx from "clsx";
import { useContext } from "react";
import { Typography } from "../../components/Typography";
import { ThemeContext } from "../Layout/context/ThemeContext";
import { FivePots } from "./FivePots";
import { Journal } from "./Journal";
import { Lucy } from "./Lucy";

import styles from "./styles/Work.module.scss";

export const Work = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles["blog-preview"]}>
      <div className={clsx(styles.title, styles[theme])}>
        <Typography component="h2" typeScale="title-1">
          WORK
        </Typography>
      </div>
      <Typography component="p">
        Some of the projects that I do for fun and I'm proud of.
      </Typography>
      <div className={styles.works}>
        <FivePots />
        <Lucy />
        <Journal />
      </div>
    </div>
  );
};
