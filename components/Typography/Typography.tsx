import clsx from "clsx";
import { TypographyProps } from "./interfaces";

import styles from "../../styles/Typography.module.scss";

export const Typography = (props: TypographyProps) => {
  const {
    component: Component = "span",
    typeScale = "paragraph",
    children,
    className,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(
        styles.typography,
        styles[`typography--${typeScale}`],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
