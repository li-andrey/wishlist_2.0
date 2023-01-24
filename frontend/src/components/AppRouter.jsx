import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageAuth from "./Pages/Auth";
import { Navbar } from "./Navbar/Navbar";
import { isAuthState, isLoadingState } from "../redux/slices/authSlice";

export const AppRouter = () => {
  const isAuth = useSelector(isAuthState);
  const isLoading = useSelector(isLoadingState);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <PageAuth />;
  }

  return (
    <>
      <div className="main_container">
        <Navbar />
        <div className="header_box"></div>
        <div className="content_container">
          <Outlet />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};
