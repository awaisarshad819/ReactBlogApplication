import React from "react";
import store from "../store";
import { useSelector } from "react-redux";

function Home() {
  const userData = useSelector((store) => store.auth.userData);
  return (
    <>
      <div className=" flex justify-center items-center">
        <div>{userData && `Welcome ${userData.name}`}</div>
      </div>
    </>
  );
}

export default Home;
