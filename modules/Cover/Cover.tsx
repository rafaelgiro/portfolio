import { Intro } from "./components/Intro";
import { IllustrationContainer, Wave } from "./components/Illustration";
import { LeftSideIcons } from "./components/LeftSideIcons/LeftSideIcons";
import { Centaurus, Scorpius } from "./components/Constelations";
import { Mail } from "./components/Mail";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

import styles from "./styles/Cover.module.scss";

export const Cover = () => {
  return (
    <div className={styles.cover}>
      <LeftSideIcons />
      <Centaurus />
      <Scorpius />
      <IllustrationContainer />
      <Intro />
      <Wave />
      <Mail />
      <ThemeSwitcher />
    </div>
  );
};
