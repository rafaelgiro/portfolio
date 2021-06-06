import { ThemesType } from "./interfaces";

export function getTime(): ThemesType {
  const time = new Date().getHours();

  if (time > 6 && time < 11) {
    return "morning";
  } else if (time >= 11 && time < 16) {
    return "noon";
  } else if (time >= 16 && time < 19) {
    return "afternoon";
  }

  return "night";
}
