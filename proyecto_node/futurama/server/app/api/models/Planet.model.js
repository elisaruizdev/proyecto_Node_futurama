const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    characters: [{ type: Schema.Types.ObjectId, ref: "character", required: true }]
});

const Planet = mongoose.model("planet", PlanetSchema);
module.exports = Planet;