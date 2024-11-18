import { Router } from "express";

import * as authControllers from "../controllers/auth.js";

import ctrlWrapper from "../decorators/ctlWrapper.js";
import validateBody from "../decorators/validateBody.js";

import {authLoginSchema} from "../validation/auth.js";

const authRouter = Router();

authRouter.post("/login", validateBody(authLoginSchema), ctrlWrapper(authControllers.login));

authRouter.get("/current", ctrlWrapper(authControllers.getCurrent));

// authRouter.post("/refresh", ctrlWrapper(authControllers.refreshSession));

authRouter.post("/logout", ctrlWrapper(authControllers.logout));

export default authRouter;
