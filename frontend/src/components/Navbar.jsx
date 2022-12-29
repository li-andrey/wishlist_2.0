import { Link, Outlet, useNavigate } from "react-router-dom";
import { PAGES } from "./AppRouter";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
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
