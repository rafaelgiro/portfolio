import { useContext } from "react";
import { Typography } from "../../../../components/Typography";
import { ThemeContext } from "../../../Layout/context/ThemeContext";
import { ThemesType } from "../../../Layout/interfaces";

import styles from "../../styles/ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themesArr: ThemesType[] = ["morning", "noon", "afternoon", "night"];
  const dayTimeTextMap: Record<ThemesType, string> = {
    morning: "Good morning!",
    noon: "Hello world!",
    afternoon: "Good evening!",
    night: "Good night!",
  };

  function handleThemeChange() {
    const currIndex = themesArr.findIndex((daytime) => daytime === theme);

    if (currIndex + 1 >= themesArr.length) {
      setTheme(themesArr[0]);
    } else {
      setTheme(themesArr[currIndex + 1]);
    }
  }

  return (
    <button className={styles["theme-switcher"]} onClick={handleThemeChange}>
      <Typography typeScale="eyebrown">{dayTimeTextMap[theme]}</Typography>
      {theme === "night" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <path d="M15.5,22c1.05,0,2.05-0.16,3-0.46c-4.06-1.27-7-5.06-7-9.54s2.94-8.27,7-9.54C17.55,2.16,16.55,2,15.5,2 c-5.52,0-10,4.48-10,10S9.98,22,15.5,22L15.5,22z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
      )}
    </button>
  );
};
