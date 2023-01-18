import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistItemService from "../../services/wishlistItemService";

export const getAllItems = createAsyncThunk(
  "wishlistItems/getAllItems",
  async (_, { rejectWithValue }) => {
    try {
      const allItems = await wishlistItemService.getAllItems();
      return allItems;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllWishlistItems = createAsyncThunk(
  "wishlistItems/getAllWishlistItems",
  async (params, { rejectWithValue }) => {
    try {
      const { wishlistId } = params;
      const wishlistItems = await wishlistItemService.getAllWishlistItems(
        wishlistId
      );
      return wishlistItems;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addWishlistItem = createAsyncThunk(
  "wishlistItems/addWishlistItem",
  async (params, { rejectWithValue }) => {
    try {
      const newWishlist = await wishlistItemService.addWishlistItem(params);
      return newWishlist;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editWishlistItem = createAsyncThunk(
  "wishlistItems/editWishlistItem",
  async (params, { rejectWithValue }) => {
    try {
      const updatedWishlist = await wishlistItemService.editWishlistItem(
        params
      );
      return updatedWishlist;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteWishlistItem = createAsyncThunk(
  "wishlistItems/deleteWishlistItem",
  async (params, { rejectWithValue }) => {
    try {
      const res = await wishlistItemService.deleteWishlistItem(params);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  items: [],
  wishlistItems: [],
  isLoading: false,
  status: null,
};

export const wishlistItemSlice = createSlice({
  name: "wishlistItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Все товары
    builder.addCase(getAllItems.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(getAllItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.items = action.payload.data;
    });
    builder.addCase(getAllItems.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    // Все товары конкретного wishlist
    builder.addCase(getAllWishlistItems.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(getAllWishlistItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.wishlistItems = action.payload.data;
    });
    builder.addCase(getAllWishlistItems.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload;
    });

    // Добавление товара в wishlist
    builder.addCase(addWishlistItem.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(addWishlistItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.wishlistItems.push(action.payload.data);
    });
    builder.addCase(addWishlistItem.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    // Редактирование товара в wishlist
    builder.addCase(editWishlistItem.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(editWishlistItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.wishlistItems = state.wishlistItems.find(action.payload);
    });
    builder.addCase(editWishlistItem.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    // Удаление товара в wishlist
    builder.addCase(deleteWishlistItem.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(deleteWishlistItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => (item._id = action.payload.data._id)
      );
    });
    builder.addCase(deleteWishlistItem.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });
  },
});

export default wishlistItemSlice.reducer;
