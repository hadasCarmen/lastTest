import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import type { User } from "../types/IUser.ts";

export default function GetCurrentUser() {
  const [userCurrent, setUserCurrent] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      });
      if (!response.ok) {
        toast.error("there is a problem with get user from backend");
      }
      const data = await response.json();
      setUserCurrent(data);
    };
    getUser();
  }, []);

  return (
    <div>
      <ul>
        <li>username: {userCurrent ? userCurrent.username : null}</li>
        <li>password:{userCurrent ? userCurrent.password : null}</li>
        <li>email:{userCurrent ? userCurrent.email : null}</li>
        <li>user_type:{userCurrent ? userCurrent.user_type : null}</li>
      </ul>
    </div>
  );
}
