import { useState, useRef, useEffect } from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageAuth from "./Pages/Auth";
import { Navbar } from "./Navbar/Navbar";
import { isAuthState, isLoadingState } from "../redux/slices/authSlice";
import {
  disablePageScroll,
  enablePageScroll,
  clearQueueScrollLocks,
  getScrollState,
} from "scroll-lock";
import Header from "./UI/Header/Header";

export const AppRouter = () => {
  const isAuth = useSelector(isAuthState);
  const isLoading = useSelector(isLoadingState);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      clearQueueScrollLocks();
      disablePageScroll();
    }
    if (!isActive) {
      clearQueueScrollLocks();
      enablePageScroll();
    }
  }, [isActive]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <PageAuth />;
  }

  return (
    <>
      <div className="main_container">
        <Header />
        <Navbar isActive={isActive} setIsActive={setIsActive} />
        <div
          className={isActive ? "modal_layout active" : "modal_layout"}
        ></div>
        <div className="content_container">
          <Outlet />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};
