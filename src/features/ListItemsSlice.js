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
    currentPage: 1,
  },
  reducers: {
    incrementPage: (state, action) => {
      state.currentPage += 1;
    },
    decrementPage: (state, action) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
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
export const getCurrentPage = (state) => state.ListItems.currentPage;

export default ListItemsSlice.reducer;
