import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import filter from "./slices/filterSlice";
import wishlists from "./slices/wishlistSlice";
import wishlistItems from "./slices/wishlistItemSlice";

export const store = configureStore({
  reducer: {
    auth,
    filter,
    wishlists,
    wishlistItems,
  },
});
