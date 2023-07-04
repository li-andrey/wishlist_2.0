import { useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PAGES } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";
import styles from "./Navbar.module.scss";
import Button from "../UI/Button/Button";

export const Navbar = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const { wishlists } = useSelector((state) => state.wishlists);
  const myWishlist = wishlists.find((w) => w.owner._id === user._id);

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
      className={isActive ? `${styles.navbar} ${styles.active}` : styles.navbar}
      ref={navRef}
    >
      <div className={styles.navbar_frame}>
        <div className={styles.navbar_header}>
          <div
            className={
              isActive
                ? `${styles.navbar_burger} ${styles.active}`
                : styles.navbar_burger
            }
            onClick={() => setIsActive(!isActive)}
          >
            <Link
              className={
                isActive
                  ? `${styles.navbar_btn} ${styles.active}`
                  : styles.navbar_btn
              }
            >
              <span className={isActive ? `${styles.active}` : ""}></span>
            </Link>
          </div>
          <div className={styles.navbar_wishlist}>
            {myWishlist ? (
              <NavLink
                className={styles.navbar_link}
                to={`/wishlists/${myWishlist._id}`}
                onClick={() => setIsActive(false)}
              >
                Мой wishlist
              </NavLink>
            ) : (
              <NavLink
                className={styles.navbar_link}
                to={PAGES.newWishlist.path}
                onClick={() => setIsActive(false)}
              >
                {PAGES.newWishlist.title}
              </NavLink>
            )}
          </div>
        </div>
        <div className={styles.navbar_content}>
          <div className={styles.navbar_menu}>
            <ul>
              <li>
                <NavLink
                  className={styles.navbar_link}
                  to={PAGES.home.path}
                  onClick={() => setIsActive(false)}
                >
                  {PAGES.home.title}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.navbar_link}
                  to={PAGES.about.path}
                  onClick={() => setIsActive(false)}
                >
                  {PAGES.about.title}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.navbar_footer}>
          <NavLink>
            <Button onClick={handleLogout}>Выйти</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
