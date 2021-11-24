const express = require("express");
const router = express.Router();

const { createCharacter, getAllCharacter, getCharacterById } = require("../controllers/characters.controller");

router.post("/create", createCharacter );
router.get("/", getAllCharacter);
router.get("/:characterId", getCharacterById);

module.exports = router;