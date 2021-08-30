import { Typography } from "../../../../components/Typography";
import styles from "../../styles/Me.module.scss";

export const Me = () => {
  return (
    <div className={styles.me}>
      <Typography
        component="h2"
        typeScale="title-1"
        className={styles.me__title}
      >
        About me
      </Typography>
      <Typography component="p" typeScale="paragraph">
        Graduated at Federal Institute of São Paulo and now doing my
        specialization on FullStack Javascript development at Positivo
        University.
      </Typography>
      <Typography component="p" typeScale="paragraph">
        Currently based at São Carlos, Brazil, I'm working as a Senior Frontend
        developer creating great user experiences. You can checkout my full
        resume{" "}
        <a href="/resume.pdf" target="blank">
          here
        </a>
        , and a summary of my professional work down below:
      </Typography>
      <div className={styles.me__skills}>
        <div>
          <Typography component="h3" typeScale="title-4">
            THE BASICS - 5.5 years
          </Typography>
          <Typography component="p" typeScale="paragraph">
            Javascript, CSS and HTML
          </Typography>
        </div>
        <div>
          <Typography component="h3" typeScale="title-4">
            BACKEND - 3 years
          </Typography>
          <Typography component="p" typeScale="paragraph">
            Node.js, Express, MongoDB and Docker
          </Typography>
        </div>
        <div>
          <Typography component="h3" typeScale="title-4">
            FRONTEND - 4 years
          </Typography>
          <Typography component="p" typeScale="paragraph">
            React, Nextjs, Redux, <strong>Design Systems</strong>, Figma and{" "}
            <strong>Micro Fontends</strong>
          </Typography>
        </div>
        <div>
          <Typography
            component="h3"
            typeScale="title-4"
            className={styles.me__title}
          >
            IMPORTANT NOTES
          </Typography>
          <Typography component="p" typeScale="title-5">
            I can brew some really good coffee.
          </Typography>
        </div>
      </div>
    </div>
  );
};
