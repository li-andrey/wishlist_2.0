import { Link, useNavigate, useLocation, matchPath } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePath = matchPath("/", pathname);
  return (
    <header className={styles.header_box}>
      {!isHomePath && (
        <Link className={styles.header_link} onClick={() => navigate(-1)}>
          <span></span>
        </Link>
      )}
    </header>
  );
};

export default Header;
