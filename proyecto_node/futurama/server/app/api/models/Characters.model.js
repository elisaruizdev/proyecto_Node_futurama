const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
    {
        name: { type: String, require: true },
        species: { type: String, require: true },
        planet: { type: String},
        profession: { type: String},
        PicUrl:{ type:String, require:true},
    },
    { timestamps: true }
);

const Character = mongoose.model("character", CharacterSchema);
module.exports = Character;