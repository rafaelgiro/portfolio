import styles from "./styles/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <svg viewBox="0 0 1440 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-7 66.0313C430.5 -20.5 920.3 -22.7687 1439.5 66.0313H-7Z" />
      </svg>
      <div className={styles.footer__content}></div>
    </div>
  );
};
