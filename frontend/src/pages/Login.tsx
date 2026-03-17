import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!response.ok) {
      toast.error("username or password not good");
      return;
    }
    const data = await response.json();
    localStorage.setItem("token", `Bearer ${data.token}`);
    const payload: { user_type: string ,username:string,userId:string} = jwtDecode(data.token);
    localStorage.setItem("user_type", `${payload.user_type}`);
    localStorage.setItem("username", `${payload.username}`);
    localStorage.setItem("userId", `${payload.userId}`);
    toast.success(`login complete you are ${payload.user_type}`);
    if (payload.user_type === "AdministratorUser") {
      navigate("/getAllLanchers");
    }
  };
  return (
    <div>
      <form action="" onSubmit={login}>
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            required
            name="username"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            required
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}
