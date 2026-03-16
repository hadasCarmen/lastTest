// import React from 'react'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Lancher } from "../types/ILancher.ts";
export default function GetAllLanchers() {
  const navigate = useNavigate();
  const [launchers, setLanchers] = useState<Lancher[]>([]);
  useEffect(() => {
    const allLanchers = async () => {
      const response = await fetch("http://localhost:5000/api/launchers");
      if (!response.ok) {
        toast.error("there is a problem with get lunchers from backend");
      }
      const data = await response.json();
      setLanchers(data);
    };
    allLanchers();
  }, []);
  const createlanch = () => navigate("/createLancher");
  return (
    <div>
      <button onClick={createlanch}>to create luncher</button>
      {launchers.map((lancher: Lancher, idx: number) => {
        return (
          <div key={idx}>
            <ul>
              <h3>lancher{idx + 1}</h3>
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
