import { Typography } from "../../../../components/Typography";

import styles from "../../styles/Mail.module.scss";

export const Mail = () => {
  return (
    <div className={styles.mail}>
      <a href="mailto:me@rafaelgiro.dev">
        <Typography typeScale="eyebrown" component="p">
          Lets talk!
        </Typography>
      </a>
    </div>
  );
};
