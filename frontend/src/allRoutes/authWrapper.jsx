import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const AuthWrapper = (props) => {
  const { users } = useSelector((state) => state.userReducer);

  return (users ? props.children : <Navigate to="/register" replace />);
};

export default AuthWrapper;