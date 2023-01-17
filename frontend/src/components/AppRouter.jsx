import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageAuth from "./Pages/PageAuth";
import { useSelector } from "react-redux";
import { isAuthState, isLoadingState } from "../redux/slices/authSlice";

export const AppRouter = () => {
  const isAuth = useSelector(isAuthState);
  const isLoading = useSelector(isLoadingState);
  console.log("11111", isAuth);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <PageAuth />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};
