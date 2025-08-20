import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import Prodcut from "../pages/prodcut"
import Register from "../pages/register"
import Login from "../pages/login"
import Setting from "../pages/setting"

const MainRoute = () => {
  return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Prodcut />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<Setting />} />
    </Routes>
  </>
}

export default MainRoute