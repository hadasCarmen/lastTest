import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const user_type = localStorage.getItem("user_type");
  let canClickGetAllLanchers = false;
  let canClickcreateLancher = false;
  let canClickregister = false;
  let canClickgetAllUsers = false;

  if (user_type === "IntelligenceCorpsUser") {
    canClickGetAllLanchers = true;
    canClickcreateLancher = true;
  }
  if (user_type === "AdministratorUser") {
    canClickGetAllLanchers = true;
    canClickcreateLancher = true;
    canClickregister = true;
    canClickgetAllUsers = true;
  }
  if (user_type === "AirForceUser") {
    canClickGetAllLanchers = true;
  }
  return (
    <>
      <div>
        {username ? (
          <button
            onClick={() => {
              localStorage.removeItem("username");
              localStorage.removeItem("user_type");
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            loguot
          </button>
        ) : (
          <button onClick={() => navigate("/login")}>login</button>
        )}
        {canClickGetAllLanchers && (
          <button onClick={() => navigate("/getAllLanchers")}>
            GetAllLanchers
          </button>
        )}
        {canClickcreateLancher && (
          <button onClick={() => navigate("/createLancher")}>
            createLancher
          </button>
        )}
        {canClickregister && (
          <button onClick={() => navigate("/register")}>register</button>
        )}
        <button onClick={() => navigate("/currentUser")}>currentUser</button>
        {canClickgetAllUsers && (
          <button onClick={() => navigate("/getAllUsers")}>getAllUsers</button>
        )}
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
