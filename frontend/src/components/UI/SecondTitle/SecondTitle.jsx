import styles from "./SecondTitle.module.scss";

const SecondTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default SecondTitle;
