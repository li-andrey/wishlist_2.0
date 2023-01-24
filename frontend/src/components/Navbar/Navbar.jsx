import { NavLink, useNavigate } from "react-router-dom";
import { PAGES } from "../../App";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";
import styles from "./Navbar.module.scss";
import { useState, useRef, useEffect } from "react";
import { Button } from "../UI/Button/Button";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    if (!isActive) return;
    const onClickNav = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.body.addEventListener("click", onClickNav);
    return () => {
      document.body.removeEventListener("click", onClickNav);
    };
  }, [isActive, setIsActive]);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav
      className={
        isActive ? `${styles.navbar} ${styles.menu_active}` : styles.navbar
      }
      ref={navRef}
    >
      <div className={styles.navbar_header}>
        <h5 className={styles.navbar_title}>
          Привет
          <br />
          Name
        </h5>
        <a
          className={
            isActive
              ? `${styles.navbar_btn} ${styles.btn_active}`
              : styles.navbar_btn
          }
          onClick={() => setIsActive(!isActive)}
        >
          <span className={isActive ? `${styles.span_active}` : ""}></span>
        </a>
      </div>
      {isActive && (
        <div className={styles.navbar_content}>
          <div className={styles.navbar_menu}>
            <ul>
              <li>
                <NavLink
                  className={styles.navbar_link}
                  to={PAGES.pageHome.path}
                >
                  {PAGES.pageHome.title}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.navbar_link}
                  to={PAGES.howItWorks.path}
                >
                  {PAGES.howItWorks.title}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.navbar_link}
                  to={PAGES.newWishlist.path}
                >
                  {PAGES.newWishlist.title}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className={styles.navbar_footer}>
        <NavLink>
          <Button className="btn-exit" onClick={handleLogout}>
            Выйти
          </Button>
        </NavLink>
      </div>
    </nav>
  );
};
