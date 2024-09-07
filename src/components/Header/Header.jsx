import React from "react";
import { NavLink } from "react-router-dom";
import HeaderActions from "./HeaderActions";

function Header() {
  const active = "text-blue-800 font-medium underline underline-offset-8";
  return (
    <header>
      <div className="flex justify-evenly items-center  py-2 shadow-md sticky top-0 relative">
        <div className="flex justify-center items-center w-1/4">
          <img src="../../assets/logo.png" alt="Logo" width="50" height="50" />
        </div>

        <nav className="w-1/2">
          <ul className="flex justify-evenly items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? active : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? active : "")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? active : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="text-center w-1/4 ">
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}

export default Header;
