import styles from "./ButtonCancel.module.scss";

const ButtonCancel = ({ onClick, children }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCancel;
