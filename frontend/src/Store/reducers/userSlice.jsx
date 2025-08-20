import { createSlice } from "@reduxjs/toolkit";
//----> Store Data and Manipulated Syncronously

const initialState = {
  users: "",
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action functions
    loadUser: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      state.users = null;
    }
  }
})

export default userSlice.reducer; // pass to the store.jsx

export const { loadUser, removeUser } = userSlice.actions;
