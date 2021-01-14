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
    status: "hey",
    currentPage: 1,
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

// export const { getItems } = ListItemsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(getItems(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const currentItems = (state) => state.ListItems.value;

export default ListItemsSlice.reducer;
