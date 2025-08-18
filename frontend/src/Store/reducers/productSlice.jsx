import { createSlice } from "@reduxjs/toolkit";
//----> Store Data and Manipulated Syncronously

const initialState = {
  products: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //---> Action Function
    loadProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productSlice.reducer; // pass to the store.jsx

export const { loadProduct } = productSlice.actions;
