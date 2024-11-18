import {Router} from 'express';

import settingsControllers from '../controllers/settings.js';

import ctrlWrapper from '../decorators/ctlWrapper.js';

const router = new Router();

router.get("/countries", ctrlWrapper(settingsControllers.getCountries));

router.post("/countries", ctrlWrapper(settingsControllers.addCountry));

router.get("/cities/country/:id", ctrlWrapper(settingsControllers.getCitiesByCountry));

router.get("/cities/parent-city/:id", ctrlWrapper(settingsControllers.getSubCities));

router.post("/cities", ctrlWrapper(settingsControllers.addCity));

router.post("/scopes", ctrlWrapper(settingsControllers.addScope));

router.get("/scopes", ctrlWrapper(settingsControllers.getAllScopes));

router.post("/professions", ctrlWrapper(settingsControllers.addProfession));

router.get("/professions/:scope", ctrlWrapper(settingsControllers.getProfessionByScope));

export default router;