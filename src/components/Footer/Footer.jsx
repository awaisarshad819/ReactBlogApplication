import React from "react";
import {
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Footer() {
  const active = "text-white font-medium underline underline-offset-8";

  return (
    <footer>
      <div className="bg-black  bottom-0 w-full flex justify-center items-top py-8 text-white">
        <div>
          <nav className="">
            <ul className="flex justify-evenly items-center gap-8 py-3">
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
          <div className="text-center py-3">
            <ul className="flex justify-center items-center gap-3">
              <li>
                <TiSocialFacebook />
              </li>
              <li>
                <TiSocialInstagram />
              </li>
              <li>
                <TiSocialPinterest />
              </li>
              <li>
                <TiSocialGooglePlus />
              </li>
              <li>
                <TiSocialTwitter />
              </li>
            </ul>
          </div>
          <div className="text-center py-3">
            © 2024 Apex Space, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
