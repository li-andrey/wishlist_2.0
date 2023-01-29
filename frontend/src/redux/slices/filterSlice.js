import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  sortValue: { property: "desireDesc" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action) => {
      state.sortValue = action.payload;
    },
  },
});

export const { setSearchValue, setSort } = filterSlice.actions;

export default filterSlice.reducer;
