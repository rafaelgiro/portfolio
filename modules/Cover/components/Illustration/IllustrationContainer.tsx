import { Triangle } from "./Triangle";
import { River } from "./River";
import { Ground } from "./Ground";
import { Sky } from "./Sky";
import { Birds } from "./Birds";

import styles from "../../styles/IllustrationContainer.module.scss";

export const IllustrationContainer = () => {
  return (
    <div className={styles["illustration-container"]}>
      <Triangle />
      <River />
      <Ground />
      <Sky />
      <Birds />
    </div>
  );
};
