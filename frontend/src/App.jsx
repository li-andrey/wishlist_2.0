import { AppRouter } from "./components/AppRouter";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import NewWishlist from "./components/Pages/NewWishlist";
import EditWishlist from "./components/Pages/EditWishlist";
import { useDispatch } from "react-redux";
import { checkAuth } from "./redux/slices/authSlice";
import { useEffect } from "react";

export const PAGES = {
  pageHome: {
    id: "pageHome",
    title: "Главная",
    path: "/",
  },
  about: {
    id: "about",
    title: "О сервисе",
    path: "/about",
  },
  newWishlist: {
    id: "newWishlist",
    title: "Создать WishList",
    path: "/wishlists",
  },
  editWishlist: {
    id: "editWishlist",
    title: "Редактирование Wishlist",
    path: "/wishlists/:wishlistId",
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
        <Route index element={<Home />} />
        <Route path={PAGES.about.path} element={<About />} />
        <Route path={PAGES.newWishlist.path} element={<NewWishlist />} />
        <Route path={PAGES.editWishlist.path} element={<EditWishlist />} />
        <Route path="*" element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
