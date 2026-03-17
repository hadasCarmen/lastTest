import React, { useState } from "react";
import type { Lancher } from "../types/ILancher.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./CreateLancher.css";
import { createLancher, updateLancherApi } from "../fetchs/fetches.ts";

type Params = {
  id?: string;
  launcher?: Lancher;
};
export default function CreateLanchComponent(params: Params) {
  const navigate = useNavigate();
  const id = params?.id;
  const launcher = params?.launcher;
  const [lancher, setLanchr] = useState<Lancher>({
    city: launcher ? launcher.city : "",
    rocketType: launcher ? launcher.rocketType : "Shahab3",
    latitude: launcher ? launcher.latitude : 0,
    longitude: launcher ? launcher.longitude : 0,
    name: launcher ? launcher.name : "",
  });
  const createOrUpdate = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const response = !id
      ? createLancher(lancher)
      : updateLancherApi(lancher, id);
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
  return (
    <div className="allPage">

      <form action="" onSubmit={createOrUpdate}>
        <div>

        <label htmlFor="city">city:</label>
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
          </div>
          <div>

        <label htmlFor="rocketType">rocketType:</label>
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
          </div>
          <div>

        <label htmlFor="latitude">latitude:</label>

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
          </div>
          <div>

        <label htmlFor="longitude">longitude:</label>

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
          </div>
          <div>

        <label htmlFor="name">name:</label>

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
          </div>
        <button type="submit">create or update lancher</button>
      </form>
    </div>
  );
}
