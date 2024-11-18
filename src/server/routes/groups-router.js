import {Router} from 'express';

import * as groupsControllers from '../controllers/groups-controllers.js';

import ctrlWrapper from '../decorators/ctlWrapper.js';

const groupsRouter = new Router();

groupsRouter.get("/", ctrlWrapper(groupsControllers.getAllGroupsController));

// router.get("/:id", ctrlWrapper(settingsControllers.getCitiesByCountry));

groupsRouter.post("/", ctrlWrapper(groupsControllers.addGroupController));

groupsRouter.delete("/", ctrlWrapper(groupsControllers.deleteGroupsController));

groupsRouter.patch("/active", ctrlWrapper(groupsControllers.toggleGroupsActiveController));

groupsRouter.put("/:id", ctrlWrapper(groupsControllers.updateGroupByIdController));

export default groupsRouter;