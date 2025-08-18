import axios from "../../utils/axios";
import { toast } from "react-toastify";

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    toast.success("sucessfully register");
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
};
