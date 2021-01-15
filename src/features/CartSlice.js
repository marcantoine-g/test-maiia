import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    nbProduct: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      if (
        state.cart.filter((product) => product.id === action.payload.id)
          .length === 0
      ) {
        state.cart.push(action.payload);
        state.nbProduct += 1;
      }
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.nbProduct -= 1;
    },
  },
});

export const getAllProduct = (state) => state.cartSlice.cart;
export const getNbProduct = (state) => state.cartSlice.nbProduct;

export default cartSlice.reducer;
