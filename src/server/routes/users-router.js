import {Router} from 'express';

import * as usersControllers from "../controllers/users-controllers.js";

import ctrlWrapper from '../decorators/ctlWrapper.js';

const usersRouter = new Router();

usersRouter.get("/group/:id", ctrlWrapper(usersControllers.getUsersByGroupIdController));

export default usersRouter;