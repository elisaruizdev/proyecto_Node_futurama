const Planet = require("../models/Planet.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");


const createPlanet = async (req, res, next) => {
    try {
        const newPlanet = new Planet();
        newPlanet.name = req.body.name;
        newPlanet.description= req.body.description;
        newPlanet.characters = req.body.characters;
        const PlanetDb = await newPlanet.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { planet: PlanetDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllPlanets = async (req, res, next) => {
    try {
        const planets = await Planet.find().populate("characters");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { planets: planets }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createPlanet, getAllPlanets }