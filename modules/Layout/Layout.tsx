import { useState } from "react";

import { ThemeContext } from "./context/ThemeContext";
import { LayoutProps, ThemesType } from "./interfaces";

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemesType>("night");

  return (
    <div className={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
