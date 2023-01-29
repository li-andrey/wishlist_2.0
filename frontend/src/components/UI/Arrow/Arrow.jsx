import arrow from "../../../assets/icons/arrow.png";
import styles from "./Arrow.module.scss";

const Arrow = ({ onClick }) => {
  return (
    <a onClick={onClick}>
      <img className={styles.arr} src={arrow} />
    </a>
  );
};

export default Arrow;
