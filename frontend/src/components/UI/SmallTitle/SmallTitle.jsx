import styles from "./SmallTitle.module.scss";

const SmallTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default SmallTitle;
