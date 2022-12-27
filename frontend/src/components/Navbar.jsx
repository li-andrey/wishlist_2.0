import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { PAGES } from "./AppRouter";

export const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = (event) => {
    event.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <nav className="navibar" expand="lg">
        <Link to={PAGES.pageHome.path}> {PAGES.pageHome.title} </Link>
        <Link to={PAGES.howItWorks.path}> {PAGES.howItWorks.title} </Link>
        <Link to={PAGES.newWishList.path}> {PAGES.newWishList.title} </Link>
        <Link>
          <button className="btn-exit" onClick={handleLogout}>
            Выйти
          </button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
