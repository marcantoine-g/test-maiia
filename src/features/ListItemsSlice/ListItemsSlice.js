import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "listItems/fetchItems",
  async (currentPage) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=15`
    );
    const responseJSON = await response.json();
    return responseJSON;
  }
);

export const ListItemsSlice = createSlice({
  name: "listItems",
  initialState: {
    photos: [],
    status: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.photos = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const getAllItems = (state) => state.ListItems.photos;

export default ListItemsSlice.reducer;
