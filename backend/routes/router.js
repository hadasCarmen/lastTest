import express from "express";
import { controllerLaunchersPost } from "../controllers/controllerLaunchersPost.js";

const router = express.Router();

router.post("/api/launchers", controllerLaunchersPost);
router.get("/api/launchers", controllerLaunchersGet);
// router
//   .get("/api/launchers/:id", controllerLaunchersId)
//   .delete(controllerLaunchersIdDelete);

export default router;
