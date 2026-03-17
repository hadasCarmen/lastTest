import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Lancher } from "../types/ILancher.ts";
import FilterCityAndType from "../components/FilterCityAndType.tsx";
import "./GetAllLanchers.css";
export default function GetAllLanchers() {
  const [launchers, setLanchers] = useState<Lancher[]>([]);
  const [city, setCity] = useState<string>("");
  const [rocketType, setRocketType] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const allLanchers = async () => {
      const response = await fetch(
        `http://localhost:5000/api/launchers?city=${city}&rocketType=${rocketType}`,
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        },
      );
      if (!response.ok) {
        toast.error("there is a problem with get lunchers from backend");
      }
      const data = await response.json();
      setLanchers(data);
    };
    allLanchers();
  }, [city, rocketType]);
  return (
    <div>
      <FilterCityAndType
        city={city}
        rocketType={rocketType}
        setCity={setCity}
        setRocketType={setRocketType}
      />
      {launchers.map((lancher: Lancher, idx: number) => {
        return (
          <div key={idx}>
            <h3>lancher{idx + 1}</h3>
            <ul onClick={() => navigate(`/launchers/${lancher._id}`)}>
              <li>city: {lancher.city}</li>
              <li>latitude:{lancher.latitude}</li>
              <li>longitude:{lancher.longitude}</li>
              <li>name:{lancher.name}</li>
              <li>rocketType:{lancher.rocketType}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
