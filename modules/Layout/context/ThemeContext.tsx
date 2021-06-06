import { createContext } from "react";
import { ThemesType } from "../interfaces";
import { ThemeContextValue } from "./interfaces";

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "morning",
  setTheme: () => "",
});
