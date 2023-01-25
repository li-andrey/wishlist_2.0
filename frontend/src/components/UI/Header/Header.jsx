import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = ({ onClick, children }) => {
  return (
    <header className={styles.header_box}>
      <Link className={styles.header_link}>
        <span></span>
      </Link>
    </header>
  );
};

export default Header;
