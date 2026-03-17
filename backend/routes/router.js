import express from "express";
import { controllerLaunchersPost } from "../controllers/controllerLaunchersPost.js";
import { controllerLaunchersGet } from "../controllers/controllerLaunchersGet.js";
import { controllerLaunchersId } from "../controllers/controllerLaunchersId.js";
import { controllerLaunchersIdDelete } from "../controllers/controllerLaunchersIdDelete.js";
import { controllerLaunchersIdPut } from "../controllers/controllerLaunchersIdPut.js";
import { controllerRegister } from "../controllers/controllerRegister.js";
import { controllerLogin } from "../controllers/controllerLogin.js";
import { authenticateJWT } from "../middlewere/verifyToken.js";

const router = express.Router();

router.post("/api/launchers",authenticateJWT, controllerLaunchersPost);
router.get("/api/launchers",authenticateJWT, controllerLaunchersGet);
router.get("/api/launchers/:id",authenticateJWT, controllerLaunchersId);
router.delete("/api/launchers/:id",authenticateJWT, controllerLaunchersIdDelete);
router.put("/api/launchers/:id",authenticateJWT, controllerLaunchersIdPut);


router.post("/api/auth/register/create",authenticateJWT, controllerRegister);
router.post("/api/auth/login", controllerLogin);


export default router;
