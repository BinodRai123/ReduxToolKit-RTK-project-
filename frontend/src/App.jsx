import { useEffect } from "react";
import MainRoute from "./allRoutes/mainRoute";
import Navbar from "./components/navbar";
import { asyncCurrentUser } from "./Store/Action/userAction";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
  },[]);

  return (
    <div className="h-screen bg-zinc-800">
      <Navbar />
      <MainRoute />
    </div>
  );
};

export default App;
