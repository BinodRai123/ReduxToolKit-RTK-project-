import { createSlice } from "@reduxjs/toolkit";
//----> Store Data and Manipulated Syncronously

const initialState = {
  users: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //---> Action Function
    loadUser: (state, action) => {
      state.users = action.payload; 
    },
  },
});

export default userSlice.reducer; // pass to the store.jsx

export const { loadUser } = userSlice.actions;
