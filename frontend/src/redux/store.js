import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import wishlists from "./slices/wishlistSlice";
import wishlistItems from "./slices/wishlistItemSlice";

export const store = configureStore({
  reducer: {
    auth,
    wishlists,
    wishlistItems,
  },
});
