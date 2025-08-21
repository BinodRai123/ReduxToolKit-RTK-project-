import { lazy } from "react";
import { Route, Routes } from "react-router-dom"


const Setting = lazy(() => import("../pages/setting")) 
const Login = lazy(() => import("../pages/login")) 
const Register = lazy(() => import("../pages/register")) 
const Prodcut = lazy(() => import("../pages/prodcut")) 
const About = lazy(() => import("../pages/about")) 
const Home = lazy(() => import("../pages/home")) 


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