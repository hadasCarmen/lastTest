import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const user_type = localStorage.getItem("user_type");
  return (
    <>
      <div>
        {username ? (
          <button onClick={() => {
            localStorage.removeItem('username')
            localStorage.removeItem('user_type')
            localStorage.removeItem('token')
            navigate("/login")
            
        }}>loguot</button>
        ) : (
          <button onClick={() => navigate("/login")}>login</button>
        )}
        <button onClick={() => navigate("/getAllLanchers")}>
          GetAllLanchers
        </button>
        <button onClick={() => navigate("/createLancher")}>
          createLancher
        </button>
        <button onClick={() => navigate("/register")}>register</button>
        <button onClick={() => navigate("/currentUser")}>currentUser</button>
        <button
          onClick={() => {
            toast.success(`hi ${username} your job is ${user_type}`);
          }}
        >
          your job
        </button>
      </div>
      <Outlet />
    </>
  );
}
