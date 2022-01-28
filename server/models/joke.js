const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setUp: String,
	punchLine: String
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
