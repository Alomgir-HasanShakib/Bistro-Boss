import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLink = (
    <>
      <NavLink to="/">
        <li className="mr-5">Home</li>
      </NavLink>
      <NavLink to="/contact">
        <li className="mr-5">CONTACT US</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li className="mr-5">DASHBOARD</li>
      </NavLink>
      <NavLink to="/menu">
        <li className="mr-5">Our Menu</li>
      </NavLink>
      <NavLink to="/shop">
        <li>Our Shop</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-black bg-opacity-50 text-white font-inter fixed z-10 container">
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
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-cinzel font-extrabold">BISTRO BOSS</a>
      </div>
      
      <div className="navbar-end">
      <div className="mr-20 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navLink}</ul>
      </div>
        <a className="btn">Log IN</a>
      </div>
    </div>
  );
};

export default NavBar;
