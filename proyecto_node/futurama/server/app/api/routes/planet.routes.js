const express = require("express");
const router = express.Router();

const { createPlanet, getAllPlanets } = require("../controllers/planet.controller");

router.post("/create", createPlanet);
router.get("/", getAllPlanets);

module.exports = router;