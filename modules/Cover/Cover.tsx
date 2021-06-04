import { Intro } from "./components/Intro";
import { IllustrationContainer, Wave } from "./components/Illustration";
import { LeftSideIcons } from "./components/LeftSideIcons/LeftSideIcons";
import { Mail } from "./components/Mail";

import styles from "./styles/Cover.module.scss";

export const Cover = () => {
  return (
    <div className={styles.cover}>
      <LeftSideIcons />
      <IllustrationContainer />
      <Intro />
      <Wave />
      <Mail />
    </div>
  );
};
