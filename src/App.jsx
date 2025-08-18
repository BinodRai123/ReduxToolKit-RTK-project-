import MainRoute from "./allRoutes/mainRoute";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="h-screen bg-blue-900">
      <Navbar />
      <MainRoute />
    </div>
  );
};

export default App;
