import * as countryServices from "../../services/countryServices.js";
import * as cityServices from "../../services/cityServices.js";
import * as scopeServices from "../../services/scopeServices.js";
import * as proffesionServices from "../../services/professionServices.js";

const getCountries = async (req, res) => {
    const countries = await countryServices.getAllCountries();

    res.json(countries);
}

const addCountry = async (req, res) => {
    const newCountry = await countryServices.addCountry(req.body);

    res.status(201).json(newCountry);
}

const getCitiesByCountry = async (req, res) => {
    const {id: countryId} = req.params;
    const cities = await cityServices.getCitiesByCountry(countryId);

    res.json(cities);
}

const getSubCities = async (req, res) => {
    const {id: parentCityId} = req.params;
    const cities = await cityServices.getSubCities(parentCityId);

    res.json(cities);
}

const addCity = async (req, res) => {
    const newCity = await cityServices.addCity(req.body);

    res.status(201).json(newCity);
}

const addScope = async (req, res) => {
    const newScope = await scopeServices.addScope(req.body);

    res.status(201).json(newScope);
}

const getAllScopes = async (req, res) => {
    const scopes = await scopeServices.getAllScopes();

    res.json(scopes);
}

const addProfession = async(req, res)=> {
    const result = await proffesionServices.addProfession(req.body);

    res.json(result);
}

const getProfessionByScope = async(req, res)=> {
    const scope = Number(req.params.scope);

    const result = await proffesionServices.getProffessionByScope(scope);

    res.json(result);
}


export default {
    getCountries,
    addCountry,
    getCitiesByCountry,
    getSubCities,
    addCity,
    addScope,
    getAllScopes,
    addProfession,
    getProfessionByScope,
}

