import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser, asyncUpdateUser } from "../Store/Action/userAction";

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.users);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      password: user?.password,
    },
  });

  const handleFormData = (user) => {
    dispatch(asyncUpdateUser());
  };

  const logoutUserHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/")
  }

  return (
    <form
      className="flex flex-col gap-8 mt-16 items-center"
      onSubmit={handleSubmit(handleFormData)}
    >
      <input
        {...register("name")}
        className="text-xl font-thin login-form"
        type="text"
        placeholder="Enter your Name"
        required
      />
      <input
        {...register("email")}
        className="text-xl font-thin login-form"
        type="email"
        placeholder="abc@gmail.com"
        required
      />

      <input
        {...register("password")}
        className="text-xl font-thin login-form"
        type="password"
        placeholder="********"
        required
      />

      <input className="button" type="submit" value={"Update"} />

      <button className="button" type="button" onClick={logoutUserHandler} >
        Log Out
      </button>
    </form>
  );
};

export default Setting;
