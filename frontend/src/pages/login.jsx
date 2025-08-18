import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormData = () => {
    reset();
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

        <input className="button" type="submit" value={"Register User"} />

        <small className="text-white text-xl font-thin">
          Already have an account:{" "}
          <NavLink className="text-blue-800 font-bold" to="/">
            Login
          </NavLink>
        </small>

      </form>
    </>
  );
};

export default Login;
