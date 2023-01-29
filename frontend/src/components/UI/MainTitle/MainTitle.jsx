import styles from "./MainTitle.module.scss";

const MainTitle = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.staticTitle}>{children}</h1>
    </div>
  );
};

export default MainTitle;
