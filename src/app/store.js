import { configureStore } from "@reduxjs/toolkit";
import ListItemsReducer from "../features/ListItemsSlice/ListItemsSlice";

export default configureStore({
  reducer: {
    ListItems: ListItemsReducer,
  },
});
