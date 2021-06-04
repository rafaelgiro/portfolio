import { LayoutProps } from "./interfaces";

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <div>{children}</div>;
};
