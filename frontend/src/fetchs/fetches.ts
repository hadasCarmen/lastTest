import type { Lancher } from "../types/ILancher.ts";

export const createLancher = async (lancher: Lancher) => await fetch("http://localhost:5000/api/launchers", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token") || ""
  },
  body: JSON.stringify({
    city: lancher.city,
    rocketType: lancher.rocketType,
    latitude: lancher.latitude,
    longitude: lancher.longitude,
    name: lancher.name,
  }),
});
export const updateLancherApi = async (lancher: Lancher, id: string) => await fetch(`http://localhost:5000/api/launchers/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token") || ""
  },
  body: JSON.stringify({
    city: lancher.city,
    rocketType: lancher.rocketType,
    latitude: lancher.latitude,
    longitude: lancher.longitude,
    name: lancher.name,
  }),
});
export const destroidLancherApi = async (id: string) => await fetch(`http://localhost:5000/api/launchers/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token") || ""
  },
  body: JSON.stringify({
    destroid: true,

  }),
});