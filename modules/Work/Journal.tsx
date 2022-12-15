import { GitHub } from "../../components/Icons";
import { Typography } from "../../components/Typography";
import styles from "./styles/Journal.module.scss";

export const Journal = () => {
  return (
    <div className={styles["journal"]}>
      <div className={styles["journal__image"]}>
        <img width="100%" src="/journal.jpg" alt="5pots homepage" />
        <svg
          viewBox="0 0 283 527"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M7.07726 1C98.2922 13.4376 188.755 17.4465 277.087 6.31084M2.50516 7.35587C82.6164 0.126282 155.713 0.177677 282 5.12875M276.136 3.8096C279.828 109.615 282 216.997 276.008 519.543M278.195 3.51837C273.907 147.887 274.872 288.505 280.14 523.912M275.823 517.882C191.154 527.047 107.891 530.713 5.40177 516.648M278.748 521.582C207.54 518.944 130.439 516.1 3.58429 523.689M4.9332 519.68C3.17251 323.933 7.90081 127.381 3.3997 8.21246M2.36317 520.982C1.00005 399.09 -0.391456 276.444 3.81147 5.89968"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className={styles["journal__content"]}>
        <a
          href="https://play.google.com/store/apps/details?id=dev.rafaelgiro.leaguejournal"
          target="blank"
          rel="noreferrer"
        >
          <Typography typeScale="eyebrown" component="h3">
            GO TO PLAY STORE
          </Typography>
        </a>
        <Typography typeScale="title-2" component="h4">
          LEAGUE JOURNAL
          <a
            href="https://github.com/rafaelgiro/league-journal"
            target="blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHub width="32" className={styles["journal__icon"]} />
          </a>
        </Typography>
        <Typography typeScale="paragraph">
          <strong>Mobile app</strong> for planning League of Legends matches
          based on <strong>real-time</strong> match data. Built with{" "}
          <strong>React Native</strong> and <strong>Expo.</strong>
        </Typography>
      </div>
    </div>
  );
};
