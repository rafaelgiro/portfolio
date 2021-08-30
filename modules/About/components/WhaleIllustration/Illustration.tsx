import { Smoke } from "./Smoke";

import styles from "../../styles/Illustration.module.scss";
import { Whale } from "./Whale";
import { WaterFlow } from "./WaterFlow";

export const Illustration = () => {
  return (
    <div className={styles.illustration}>
      <WaterFlow />
      <svg
        className={styles.container}
        viewBox="0 0 613 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Smoke />
        <Whale />
      </svg>
    </div>
  );
};
