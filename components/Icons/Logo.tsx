import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  const { ...rest } = props;

  return (
    <svg
      viewBox="0 0 28 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M3 19C4.8273 21.8959 3.73092 32.3454 3 35" strokeWidth="6" />
      <path
        d="M4.5 30.1429C9.66569 30.1429 18.5625 30.1429 27 30.1429"
        strokeWidth="6"
      />
      <path
        d="M24.75 27.2857C24.75 35.9911 24.75 37.1629 24.75 38"
        strokeWidth="6"
      />
      <path
        d="M14.4069 22.9996C14.4069 22.9996 25 23.2102 25 13.3156C25 3.42105 14.4069 3 14.4069 3H9"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
};
