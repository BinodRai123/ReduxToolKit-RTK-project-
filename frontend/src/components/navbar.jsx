import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <>
    <nav className="flex p-5 text-2xl gap-16 font-thin justify-center text-white">
        <NavLink className={e => e.isActive ? "border-b" : ""} to="/" >Home</NavLink>
        <NavLink className={e => e.isActive ? "border-b" : ""} to="/about" >About</NavLink>
        <NavLink className={e => e.isActive ? "border-b" : ""} to="/product" >Product</NavLink>
        <NavLink className={e => e.isActive ? "border-b" : ""} to="/login" >Sign-In</NavLink>
    </nav>
  </>
}

export default Navbar