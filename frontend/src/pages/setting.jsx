import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm({
    // defaultValues: {

    // }
  });

  const handleFormData = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };

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

        <button className="button" type="button">Log Out</button>
    </form>
  );
};

export default Setting;
