import clsx from "clsx";
import styles from "../../styles/Ground.module.scss";

export const Ground = () => {
  return (
    <svg
      className={styles.ground}
      viewBox="0 0 367 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 232L121.5 91C130.667 107.167 151.5 132 172.5 132C197.168 132 203.5 155 247.5 158C291.5 161 303.763 176.215 314 192.5C336 227.5 325.5 221.5 367 232H40Z"
        className={styles["terrain--3"]}
      />
      <rect
        className={clsx(styles.tree, styles["tree--3"])}
        x="158"
        y="116"
        width="12"
        height="71"
      />
      <path
        className={clsx(styles.tree, styles.tree__leaf, styles["tree--3"])}
        d="M164.5 36L209.1 92.25H119.9L164.5 36Z"
      />
      <path
        className={clsx(styles.tree, styles.tree__leaf, styles["tree--3"])}
        d="M164.5 1L209.1 57.25H119.9L164.5 1Z"
      />
      <path
        className={clsx(styles.tree, styles.tree__leaf, styles["tree--3"])}
        d="M164.5 72L209.1 128.25H119.9L164.5 72Z"
      />
      <path
        d="M173 140.5C156.5 141.276 114.1 147.1 116.5 99.5L40 232H305.5C305.5 232 302 226 296 197C291.637 175.914 249.475 187.982 226 181C202.216 173.926 192.628 139.577 173 140.5Z"
        className={styles["terrain--2"]}
      />
      <path
        className={clsx(styles.tree, styles.tree__leaf, styles["tree--2"])}
        d="M118.5 0L149.244 174H87.7561L118.5 0Z"
      />
      <path
        d="M40 232L99 130C89.8333 149.167 94 161.5 126.5 156.5C161.219 151.159 177.833 161.833 187.5 173.5C192.333 188 206.9 206.2 244.5 201C282.1 195.8 307.667 224.333 319 232H40Z"
        className={styles["terrain--1"]}
      />
      <path
        className={clsx(styles.tree, styles.tree__leaf, styles["tree--1"])}
        d="M51.5 97L96.1003 153.25H6.89969L51.5 97Z"
      />
      <path
        className={clsx(styles.tree, styles.tree__leaf, styles["tree--1"])}
        d="M51.5 132L96.1003 188.25H6.89969L51.5 132Z"
      />
      <rect
        className={clsx(styles.tree, styles["tree--1"])}
        x="42"
        y="158"
        width="16"
        height="72"
      />
    </svg>
  );
};
