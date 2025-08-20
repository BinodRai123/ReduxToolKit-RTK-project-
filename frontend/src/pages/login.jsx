import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../Store/Action/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const loginForm = (user) => {

    dispatch(asyncLoginUser(user));
    navigate("/");
  };

  return (
    <>
      <form
        className="flex flex-col gap-8 mt-16 items-center"
        onSubmit={handleSubmit(loginForm)}
      >
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

        <input className="button" type="submit" value={"Log in"} />

        <small className="text-white text-xl font-thin">
          Don't have an account:{" "}
          <NavLink className="text-blue-800 font-bold" to="/register">
            Register
          </NavLink>
        </small>
      </form>
    </>
  );
};

export default Login;
