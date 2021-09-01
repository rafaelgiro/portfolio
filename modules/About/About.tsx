import { Me } from "./components/Me";
import { Transition } from "./components/Transition";
import { Illustration } from "./components/WhaleIllustration";

import styles from "./styles/About.module.scss";

export const About = () => {
  return (
    <div className={styles.about}>
      <Illustration />
      <Me />
      <Transition />
    </div>
  );
};
