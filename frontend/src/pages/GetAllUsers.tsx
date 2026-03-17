import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { User } from "../types/IUser";
import { useNavigate } from "react-router-dom";

export default function GetAllUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const allUsers = async () => {
      const response = await fetch(
        `http://localhost:5000/api/auth/getAllUsers`,
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        },
      );
      if (!response.ok) {
        toast.error("there is a problem with get users from backend");
      }
      const data = await response.json();
      setUsers(data);
    };
    allUsers();
  }, []);

  const deleteUser = async (id: string) => {
    await fetch(`http://localhost:5000/api/auth/register/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token") || "",
      },
    });
    navigate(-1);
    toast.success("luncher deletet");
  };

  return (
    <div>
      {users.map((user: User, idx: number) => {
        return (
          <div key={idx}>
            <h3>user{idx + 1}</h3>
            <ul >
              <li>city: {user.username}</li>
              <li>latitude:{user.password}</li>
              <li>longitude:{user.email}</li>
              <li>name:{user.user_type}</li>
            </ul>
            <button
              onClick={() => {
                user._id ? deleteUser(user._id) : null;
              }}
            >
              delete user {idx + 1}
            </button>
            <button onClick={() => navigate(`/updateUser/${user._id}`)}>
              update user {idx + 1}
            </button>
          </div>
        );
      })}
    </div>
  );
}
