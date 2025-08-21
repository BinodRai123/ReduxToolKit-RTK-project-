import axios from "../../utils/axios";
import { toast } from "react-toastify";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
  } catch (error) {
    toast.error(error);
  }
};

export const asyncLogoutUser = () => async (dispatch) => {
  try {
    localStorage.setItem("user", null);
    dispatch(removeUser());
  } catch (error) {
    toast.error(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    toast.error(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/users", user);
  } catch (error) {
    toast.error(error.message);
  }
};

export const asyncUpdateUser = (user) => async (dispatch, getState) => {
  try {
    await axios.patch("/users/" + user.id, user);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(loadUser(user));
  } catch (error) {
    console.log(error);
  }
};
