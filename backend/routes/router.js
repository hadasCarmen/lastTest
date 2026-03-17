import express from "express";
import { controllerLaunchersPost } from "../controllers/controllerLaunchersPost.js";
import { controllerLaunchersGet } from "../controllers/controllerLaunchersGet.js";
import { controllerLaunchersId } from "../controllers/controllerLaunchersId.js";
import { controllerLaunchersIdDelete } from "../controllers/controllerLaunchersIdDelete.js";
import { controllerLaunchersIdPut } from "../controllers/controllerLaunchersIdPut.js";
import { controllerRegister } from "../controllers/controllerRegister.js";
import { controllerLogin } from "../controllers/controllerLogin.js";

const router = express.Router();

router.post("/api/launchers", controllerLaunchersPost);
router.get("/api/launchers", controllerLaunchersGet);
router.get("/api/launchers/:id", controllerLaunchersId);
router.delete("/api/launchers/:id", controllerLaunchersIdDelete);
router.put("/api/launchers/:id", controllerLaunchersIdPut);


router.post("/api/auth/register/create", controllerRegister);
router.post("/api/auth/login", controllerLogin);


export default router;
