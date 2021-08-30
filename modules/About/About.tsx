import { Me } from "./components/Me";
import { Illustration } from "./components/WhaleIllustration";

import styles from "./styles/About.module.scss";

export const About = () => {
  return (
    <div className={styles.about}>
      <Illustration />
      <Me />
    </div>
  );
};
