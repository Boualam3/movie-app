

const mongoose = require("mongoose")

const ListSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    genre: { type: String },
    content: { type: Array }

}, { timestamps }
)

const List = mongoose.model("List", ListSchema)

module.exports = List;