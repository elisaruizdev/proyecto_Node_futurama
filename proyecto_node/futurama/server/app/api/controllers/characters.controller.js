const Character = require("../models/Characters.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const createCharacter = async (req, res, next) => {
    try {
        const newCharacter = new Character();
        newCharacter.name = req.body.name;
        newCharacter.species = req.body.species;
        newCharacter.planet = req.body.planet;
        newCharacter.profession = req.body.profession;
        newCharacter.picUrl = req.body.picUrl;
        const CharacterDb = await newCharacter.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { character: CharacterDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllCharacter = async (req, res, next) => {
    try {
        // Si no pasais paginación por query params quitar el if
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const character = await Character.find().skip(skip).limit(20);
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { character: character }
            });
        } else {
            const character = await Character.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { character: character }
            });
        }
    } catch (error) {
        return next(error)
    }
}

const getCharacterById = async (req, res, next) => {
    try {
        const { characterId } = req.params;
        const characterById = await Character.findById(characterId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { characters: characterById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createCharacter, getAllCharacter, getCharacterById };