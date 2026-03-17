import express from "express";
import { controllerLaunchersPost } from "../controllers/controllerLaunchersPost.js";
import { controllerLaunchersGet } from "../controllers/controllerLaunchersGet.js";
import { controllerLaunchersId } from "../controllers/controllerLaunchersId.js";
import { controllerLaunchersIdDelete } from "../controllers/controllerLaunchersIdDelete.js";
import { controllerLaunchersIdPut } from "../controllers/controllerLaunchersIdPut.js";
import { controllerRegister } from "../controllers/controllerRegister.js";
import { controllerUpdate } from "../controllers/controllerUpdate.js";
import { controllerLogin } from "../controllers/controllerLogin.js";
import { authenticateJWT } from "../middlewere/verifyToken.js";
import { controllerUserIdDelete } from "../controllers/controllerUserIdDelete.js";
import { controllerUserGet } from "../controllers/controllerUserGet.js";
import { controllergetAllUsers } from "../controllers/controllergetAllUsers.js";
import { justAdmin, verifyCanChanges } from "../middlewere/verifyJob.js";

const router = express.Router();

router.post(
  "/api/launchers",
  authenticateJWT,
  verifyCanChanges,
  controllerLaunchersPost,
);
router.get("/api/launchers", authenticateJWT, controllerLaunchersGet);
router.get("/api/launchers/:id", authenticateJWT, controllerLaunchersId);
router.delete(
  "/api/launchers/:id",
  authenticateJWT,
  verifyCanChanges,
  controllerLaunchersIdDelete,
);
router.put("/api/launchers/:id", authenticateJWT, controllerLaunchersIdPut);

router.post(
  "/api/auth/register/create",
  authenticateJWT,
  justAdmin,
  controllerRegister,
);
router.put(
  "/api/auth/register/update",
  authenticateJWT,
  justAdmin,
  controllerUpdate,
);
router.delete(
  "/api/auth/register/delete/:id",
  authenticateJWT,
  justAdmin,
  controllerUserIdDelete,
);
router.post("/api/auth/login", controllerLogin);
router.get("/api/auth/getUser", authenticateJWT, controllerUserGet);
router.get(
  "/api/auth/getAllUsers",
  authenticateJWT,
  justAdmin,
  controllergetAllUsers,
);

export default router;
