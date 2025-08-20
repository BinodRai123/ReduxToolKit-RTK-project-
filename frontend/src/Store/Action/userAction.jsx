import axios from "../../utils/axios";
import { toast } from "react-toastify";
import { loadUser } from "../reducers/userSlice"

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user) dispatch(loadUser(user));
    else console.log("user not logged in");
  } catch (error) {
    toast.error(error);
  }
};

export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.setItem("user", null);
  } catch (error) {
    toast.error(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    console.log(data)
    localStorage.setItem("user",JSON.stringify(data[0]));
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
}