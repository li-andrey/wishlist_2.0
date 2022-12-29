import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PageHowItWorks from "./Pages/PageHowItWorks";
import PageHome from "./Pages/PageHome";
import PageNewWishList from "./Pages/PageNewWishList";
import PageEditWishList from "./Pages/PageEditWishList";
import PageAuth from "./Pages/PageAuth";
import { Navbar } from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth } from "../redux/slices/authSlice";
import { checkAuth } from "../redux/slices/authSlice";

export const PAGES = {
  pageHome: {
    id: "pageHome",
    title: "Главная",
    path: "/",
  },
  howItWorks: {
    id: "howItWorks",
    title: "Как это работает",
    path: "/how_it_works",
  },
  newWishList: {
    id: "newWishList",
    title: "Создать WishList",
    path: "/wishlists",
  },
  editWishList: {
    id: "editWishList",
    title: "Редактирование WishList",
    path: "/wishlists/:wishListId",
  },
  pageAuth: {
    id: "pageAuth",
    title: "Авторизация",
    path: "/",
  },
};

export const AppRouter = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(checkIsAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, [isAuth]);

  if (isAuth) {
    return (
      <Routes>
        <Route path={PAGES.pageHome.path} element={<Navbar />}>
          <Route index element={<PageHome />} />
          <Route path={PAGES.howItWorks.path} element={<PageHowItWorks />} />
          <Route path={PAGES.newWishList.path} element={<PageNewWishList />} />
          <Route
            path={PAGES.editWishList.path}
            element={<PageEditWishList />}
          />
          <Route path="*" element={<PageHome />} />
        </Route>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<PageAuth />} />
    </Routes>
  );
};
