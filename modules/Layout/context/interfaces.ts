import { Dispatch, SetStateAction } from "react";
import { ThemesType } from "../interfaces";

export interface ThemeContextValue {
  theme: ThemesType;
  setTheme: Dispatch<SetStateAction<ThemesType>>;
}
