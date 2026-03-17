import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <button onClick={() => navigate("/login")}>login</button>
      <button onClick={() => navigate("/getAllLanchers")}>
        GetAllLanchers
      </button>
      <button onClick={() => navigate("/createLancher")}>createLancher</button>
      <button onClick={() => navigate("/register")}>register</button>
    </div>
    <Outlet />
    </>
  );
}
