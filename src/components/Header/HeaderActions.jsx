import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import store from "../../store";
import { logout, login } from "../../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../api/authService";

function HeaderActions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((store) => store.auth.status);

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/");
    });
  };

  return userStatus ? (
    <>
      <NavLink to="/dashboard">
        <button className="bg-blue-800 text-white px-5 py-3 mx-3 rounded">
          My Dashboard
        </button>
      </NavLink>
      <button
        onClick={() => logoutHandler()}
        className="bg-blue-800 text-white px-5 py-3 mx-3 rounded"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <NavLink to="/login">
        <button className="bg-blue-800 text-white px-5 py-3 mx-3 rounded">
          Login
        </button>
      </NavLink>
      <NavLink to="/signup">
        <button className="bg-blue-800 text-white px-5 py-3 mx-3 rounded">
          Sign Up
        </button>
      </NavLink>
    </>
  );
}

export default HeaderActions;
