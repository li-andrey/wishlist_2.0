import styles from "./ButtonSecondary.module.scss";

const ButtonSecondary = ({ onClick, children }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
