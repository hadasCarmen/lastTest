import React, { useState } from "react";
import type { Lancher } from "../types/ILancher.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './CreateLancher.css'
import { createLancher } from "../fetchs/fetches.ts";
export default function CreateLanchComponent() {
    const navigate = useNavigate();

  const [lancher, setLanchr] = useState<Lancher>({
    city: "",
    rocketType: "Shahab3",
    latitude: 0,
    longitude: 0,
    name: "",
  });
  const forAsinc = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const response = createLancher(lancher)
    if (!response) {
      toast.error("there is problem fetch lancher create");
      setLanchr({
        city: "",
        rocketType: "Shahab3",
        latitude: 0,
        longitude: 0,
        name: "",
      });
      return;
    }
    toast.success("lancher created");
    setLanchr({
      city: "",
      rocketType: "Shahab3",
      latitude: 0,
      longitude: 0,
      name: "",
    });
    return;
  };
  const allLanchers = () => navigate("/GetAllLanchers");
  return (
    <div className="allPage">
      <button onClick={allLanchers}>Get All Lanchers</button>

      <form action="" onSubmit={forAsinc}>
        <input
          type="text"
          required
          name="city"
          id="city"
          value={lancher.city}
          placeholder="city"
          onChange={(e) =>
            setLanchr((prev) => ({ ...prev, city: e.target.value }))
          }
        />

        <select
          required
          name="rocketType"
          id="rocketType"
          value={lancher.rocketType}
          onChange={(e) =>
            setLanchr((prev) => ({
              ...prev,
              rocketType: e.target.value as
                | "Shahab3"
                | "Fetah110"
                | "Radwan"
                | "Kheibar",
            }))
          }
        >
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <input
          type="number"
          required
          name="latitude"
          id="latitude"
          value={lancher.latitude}
          placeholder="latitude"
          onChange={(e) =>
            setLanchr((prev) => ({ ...prev, latitude: Number(e.target.value) }))
          }
        />
        <input
          type="number"
          required
          name="longitude"
          id="longitude"
          value={lancher.longitude}
          placeholder="longitude"
          onChange={(e) =>
            setLanchr((prev) => ({
              ...prev,
              longitude: Number(e.target.value),
            }))
          }
        />
        <input
          type="text"
          required
          name="name"
          id="name"
          value={lancher.name}
          placeholder="name"
          onChange={(e) =>
            setLanchr((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <button type="submit">create lancher</button>
      </form>
    </div>
  )
}
