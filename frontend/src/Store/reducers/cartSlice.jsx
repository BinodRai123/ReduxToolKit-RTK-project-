import { createSlice } from "@reduxjs/toolkit";
//----> Store Data and Manipulated Syncronously

const initialState = {
  carts: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //---> Action Function

    loadCart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export default cartSlice.reducer; // pass to the store.jsx

export const { loadCart } = cartSlice.actions;
