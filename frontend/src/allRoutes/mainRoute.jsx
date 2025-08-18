import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import Prodcut from "../pages/prodcut"
import Login from "../pages/login"

const MainRoute = () => {
  return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Prodcut />} />
        <Route path="/Login" element={<Login />} />
    </Routes>
  </>
}

export default MainRoute