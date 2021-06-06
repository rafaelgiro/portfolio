import { useEffect, useLayoutEffect, useState } from "react";

import { ThemeContext } from "./context/ThemeContext";
import { getTime } from "./helpers";
import { LayoutProps, ThemesType } from "./interfaces";

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemesType>("morning");

  useLayoutEffect(() => {
    setTheme(getTime());
  });

  return (
    <div className={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
