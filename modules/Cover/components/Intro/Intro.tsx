import { Typography } from "../../../../components/Typography";

import styles from "../../styles/Intro.module.scss";

export const Intro = () => {
  return (
    <Typography className={styles.intro} typeScale="title-5" component="h5">
      Hi! I'm Rafael Giro, a web developer with a passion for design and
      astronomy.
    </Typography>
  );
};

export default Intro;
