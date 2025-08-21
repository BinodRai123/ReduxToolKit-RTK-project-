import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const user = useSelector((state) => state.userReducer.users);

  return <>
    <nav className="flex p-5 text-2xl gap-16 font-thin justify-center text-white">
        <NavLink className={e => e.isActive ? "border-b" : ""} to="/" >Home</NavLink>
        <NavLink className={e => e.isActive ? "border-b" : ""} to="/about" >About</NavLink>
        <NavLink className={e => e.isActive ? "border-b" : ""} to="/product" >Product</NavLink>

        {user ? <></> : <>
          <NavLink className={e => e.isActive ? "border-b" : ""} to="/register" >Sign-In</NavLink>
        </>}

        {user ? <NavLink className={e => e.isActive ? "border-b": ""} to="/setting">Setting</NavLink> : <></>}
    </nav>
  </>
}

export default Navbar