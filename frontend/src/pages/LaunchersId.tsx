import { toast } from "react-toastify";
import type { Lancher } from "../types/ILancher.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LaunchersId() {
  let params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [launcher, setLancher] = useState<Lancher>({
    city: "",
    rocketType: "Shahab3",
    latitude: 0,
    longitude: 0,
    name: "",
  });
  useEffect(() => {
    const allLanchers = async () => {
      const response = await fetch(`http://localhost:5000/api/launchers/${id}`);
      if (!response.ok) {
        toast.error("there is a problem with get lunchers from backend");
      }
      const data = await response.json();
      setLancher(data);
    };
    allLanchers();
  }, []);
  const createlanch = () => navigate(-1);

  return (
    <div>
      <button onClick={createlanch}>to create luncher</button>

      <ul>
        <li>city: {launcher.city}</li>
        <li>latitude:{launcher.latitude}</li>
        <li>longitude:{launcher.longitude}</li>
        <li>name:{launcher.name}</li>
        <li>rocketType:{launcher.rocketType}</li>
      </ul>
    </div>
  );
}
