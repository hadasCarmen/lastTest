import express from "express";
import { controllerLaunchersPost } from "../controllers/controllerLaunchersPost.js";
import { controllerLaunchersGet } from "../controllers/controllerLaunchersGet.js";
import { controllerLaunchersId } from "../controllers/controllerLaunchersId.js";
import { controllerLaunchersIdDelete } from "../controllers/controllerLaunchersIdDelete.js";
import { controllerLaunchersIdPut } from "../controllers/controllerLaunchersIdPut.js";

const router = express.Router();

router.post("/api/launchers", controllerLaunchersPost);
router.get("/api/launchers", controllerLaunchersGet);

  router.get("/api/launchers/:id", controllerLaunchersId)
  router.delete("/api/launchers/:id",controllerLaunchersIdDelete);
  router.put("/api/launchers/:id",controllerLaunchersIdPut);

export default router;
