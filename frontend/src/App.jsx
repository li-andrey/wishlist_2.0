import { AppRouter } from "./components/AppRouter";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PageHowItWorks from "./components/Pages/PageHowItWorks";
import PageHome from "./components/Pages/PageHome";
import PageNewWishList from "./components/Pages/PageNewWishList";
import PageEditWishList from "./components/Pages/PageEditWishList";
import { useDispatch, useSelector } from "react-redux";
import { isAuthState, checkAuth } from "./redux/slices/authSlice";
import { useEffect } from "react";
import PageAuth from "./components/Pages/PageAuth";

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

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={PAGES.pageHome.path} element={<AppRouter />}>
        <Route index element={<PageHome />} />
        <Route path={PAGES.howItWorks.path} element={<PageHowItWorks />} />
        <Route path={PAGES.newWishList.path} element={<PageNewWishList />} />
        <Route path={PAGES.editWishList.path} element={<PageEditWishList />} />
        <Route path="*" element={<PageHome />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
