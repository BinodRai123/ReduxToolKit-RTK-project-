import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { asyncRegisterUser } from "../Store/Action/userAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormData = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login")
  };

  return (
    <>
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

        <input className="button" type="submit" value={"Register"} />

        <small className="text-white text-xl font-thin">
          Already have an account:{" "}
          <NavLink className="text-blue-800 font-bold" to="/login">
            Login
          </NavLink>
        </small>
      </form>
    </>
  );
};

export default Register;
