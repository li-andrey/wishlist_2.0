import { NavLink, useNavigate } from "react-router-dom";
import { PAGES } from "../../App";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let activeStyle = {
    textDecoration: "underline",
  };

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav className="navibar" expand="lg">
      <ul>
        <li>
          <NavLink
            to={PAGES.pageHome.path}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {PAGES.pageHome.title}
          </NavLink>
        </li>
        <li>
          <NavLink to={PAGES.howItWorks.path}>{PAGES.howItWorks.title}</NavLink>
        </li>
        <li>
          <NavLink to={PAGES.newWishList.path}>
            {PAGES.newWishList.title}
          </NavLink>
        </li>
        <li>
          <NavLink>
            <button className="btn-exit" onClick={handleLogout}>
              Выйти
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
