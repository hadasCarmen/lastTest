import  { useState } from "react";
import type { User } from "../types/IUser";
import { useParams } from "react-router-dom";

export default function UpdateUser() {
  let params = useParams();
  const id = params.id;
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    email: "",
    user_type: "AirForceUser",
  });

  const updateUserApi = async () =>
    await fetch(`http://localhost:5000/api/auth/register/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        userId: id,
        username: user.username,
        password: user.password,
        email: user.email,
        user_type: user.user_type,
      }),
    });
  return (
    <div>
      <form action="" onSubmit={updateUserApi}>
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
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

        <button type="submit">update user</button>
      </form>
    </div>
  );
}
