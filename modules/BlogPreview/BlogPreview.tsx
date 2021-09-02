import clsx from "clsx";
import { useContext } from "react";
import { Typography } from "../../components/Typography";
import { ThemeContext } from "../Layout/context/ThemeContext";

import styles from "./styles/BlogPreview.module.scss";

export const BlogPreview = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles["blog-preview"]}>
      <div className={clsx(styles.title, styles[theme])}>
        <Typography component="h2" typeScale="title-1">
          BLOG
        </Typography>
      </div>
    </div>
  );
};
