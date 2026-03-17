import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { User } from "../types/IUser";

export default function Register() {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    email: "",
    user_type: "AirForceUser",
  });
  const navigate = useNavigate();
  const register = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/auth/register/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token") || "",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
          email: user.email,
          user_type: user.user_type,
        }),
      },
    );
    if (!response.ok) {
      setUser({
        username: "",
        password: "",
        email: "",
        user_type: "AirForceUser",
      });
      toast.error("user not create or create before");
      return;
    }
    setUser({
      username: "",
      password: "",
      email: "",
      user_type: "AirForceUser",
    });
    toast.success("user create");
    return;
  };
  if (localStorage.getItem("user_type") !== "AdministratorUser") {
    toast.error("you not denided");
    return;
  }
  return (
    <div>
      <form action="" onSubmit={register}>
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            required
            name="username"
            id="username"
            value={user.username}
            placeholder="username"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="user_type">user_type:</label>
          <select
            required
            name="user_type"
            id="user_type"
            value={user.user_type}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                user_type: e.target.value as
                  | "IntelligenceCorpsUser"
                  | "AirForceUser"
                  | "AdministratorUser",
              }))
            }
          >
            <option value="IntelligenceCorpsUser">IntelligenceCorps</option>
            <option value="AirForceUser">AirForce</option>
            <option value="AdministratorUser">Administrator</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">password:</label>

          <input
            type="password"
            required
            name="password"
            id="password"
            value={user.password}
            placeholder="password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>

          <input
            type="email"
            required
            name="email"
            id="email"
            value={user.email}
            placeholder="email"
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>

        <button type="submit">create user</button>
      </form>
    </div>
  );
}
