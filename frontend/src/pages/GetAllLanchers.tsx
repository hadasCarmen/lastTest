// import React from 'react'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Lancher } from "../types/ILancher.ts";
export default function GetAllLanchers() {
  const navigate = useNavigate();
  const [launchers, setLanchers] = useState<Lancher[]>([]);
  const [city, setCity] = useState<string>("");
  const [rocketType, setRocketType] = useState<string>("");
  useEffect(() => {
    const allLanchers = async () => {
      const response = await fetch(
        `http://localhost:5000/api/launchers?city=${city}&rocketType=${rocketType}`,
      );
      if (!response.ok) {
        toast.error("there is a problem with get lunchers from backend");
      }
      const data = await response.json();
      setLanchers(data);
    };
    allLanchers();
  }, [city, rocketType]);
  const createlanch = () => navigate("/createLancher");
  return (
    <div>
      <button onClick={createlanch}>to create luncher</button>
      <input
        type="text"
        required
        name="city"
        id="city"
        value={city}
        placeholder="city"
        onChange={(e) => setCity(e.target.value)}
      />
      <select
        required
        name="rocketType"
        id="rocketType"
        value={rocketType}
        onChange={(e) =>
          setRocketType(
            e.target.value as "Shahab3" | "Fetah110" | "Radwan" | "Kheibar",
          )
        }
      >
        <option value="">coohse type</option>
        <option value="Shahab3">Shahab3</option>
        <option value="Fetah110">Fetah110</option>
        <option value="Radwan">Radwan</option>
        <option value="Kheibar">Kheibar</option>
      </select>
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
