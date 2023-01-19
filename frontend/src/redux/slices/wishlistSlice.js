import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistService from "../../services/wishlistService";

export const getAllWishlists = createAsyncThunk(
  "wishlists/getAllWishlists",
  async (_, { rejectWithValue }) => {
    try {
      const allWishlists = await wishlistService.getAllWishlists();
      return allWishlists;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getWishlist = createAsyncThunk(
  "wishlists/getWishlist",
  async (wishlistId, { rejectWithValue }) => {
    try {
      const wishlist = await wishlistService.getWishlist(wishlistId);
      return wishlist;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createWishlist = createAsyncThunk(
  "wishlists/createWishlist",
  async (userId, { rejectWithValue }) => {
    try {
      const newWishlist = await wishlistService.createWishlist(userId);
      return newWishlist;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  wishlists: [],
  isLoading: false,
  status: null,
};

export const wishlistSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Все wishlists
    builder.addCase(getAllWishlists.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(getAllWishlists.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.wishlists = action.payload;
    });
    builder.addCase(getAllWishlists.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    // Получить один wishlist
    builder.addCase(getWishlist.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(getWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });
    builder.addCase(getWishlist.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    // Создать новый wishlist
    builder.addCase(createWishlist.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(createWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.wishlists.push(action.payload);
    });
    builder.addCase(createWishlist.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });
  },
});

export default wishlistSlice.reducer;
