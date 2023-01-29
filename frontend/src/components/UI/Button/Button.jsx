import styles from "./Button.module.scss";

const Button = ({ onClick, children }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
