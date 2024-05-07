import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useContext } from "react";
import { ContextProvider } from "../../../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, Logout } = useContext(ContextProvider);
  const handleLogOut = () => {
    Logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink className="text-lg font-bold mx-3" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold mx-3" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold mx-3" to="/service">
          Service
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold mx-3" to="/blog">
          blog
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold mx-3" to="/contact">
          Contact
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={`/cart`} className="text-lg font-bold mx-3">
              My Cart
            </NavLink>
          </li>
          <li>
            <Link
              onClick={handleLogOut}
              className="text-lg bg-red-600 text-white font-bold mx-3"
            >
              Logout
            </Link>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            className="text-lg bg-orange-400 text-white font-bold mx-3"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="w-3/4" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 items-center mr-4">
          <BiSearch className="text-2xl"></BiSearch>
          <HiOutlineShoppingBag className="text-2xl" />
        </div>
        <Link to="/apoinment" className="btn text-lg btn-outline">
          Apoinment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
