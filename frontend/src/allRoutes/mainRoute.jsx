import { lazy } from "react";
import { Route, Routes } from "react-router-dom"
import AuthWrapper from "./authWrapper";
import PageNotFound from "../pages/pageNotFound";


const Setting = lazy(() => import("../pages/setting")) 
const Login = lazy(() => import("../pages/login")) 
const Register = lazy(() => import("../pages/register")) 
const Prodcut = lazy(() => import("../pages/prodcut")) 
const About = lazy(() => import("../pages/about")) 
const Home = lazy(() => import("../pages/home")) 


const MainRoute = () => {
  return <>
    <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<AuthWrapper><About /></AuthWrapper>} />
        <Route path="/product" element={<AuthWrapper><Prodcut /></AuthWrapper>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<AuthWrapper><Setting /></AuthWrapper>} />

        <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
}

export default MainRoute