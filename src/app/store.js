import { configureStore } from "@reduxjs/toolkit";
import ListItemsReducer from "../features/ListItemsSlice";
import cartSliceReducer from "../features/CartSlice";

export default configureStore({
  reducer: {
    ListItems: ListItemsReducer,
    cartSlice: cartSliceReducer,
  },
});
