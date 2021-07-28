const Song = require("../models/song");

const createSong = (req, res) => {
	Song.create(req.body)
		.then((newSong) => {
			return res.status(201).send(newSong);
		})
		.catch((error) => {
			return res.status(500).send("can't insert the new song; Error:", error);
		});
};

const getAllSongs = (req, res) => {
	Song.find({})
		.then((allSongs) => {
			return res.status(200).send(allSongs);
		})
		.catch((error) => {
			return res.status(500).send("can't find all songs; Error:", error);
		});
};

const getSong = (req, res) => {
	Song.findById(req.params.id)
		.then((song) => {
			return res.status(200).send(song);
		})
		.catch((error) => {
			return res.status(500).send("can't find all songs; Error:", error);
		});
};

const deleteSong = (req, res) => {
	Song.findByIdAndDelete(req.params.id)
		.then((deletedSong) => {
			return res.status(200).send(deletedSong);
		})
		.catch((error) => {
			return res.status(500).send("can't delete the song; Error:", error);
		});
};

const editSong = (req, res) => {
	Song.findByIdAndUpdate(req.params.id, req.body, { new: false })
		.then((updatedSong) => {
			return res.status(200).send(updatedSong);
		})
		.catch((error) => {
			return res.status(500).send("can't update the song; Error:", error);
		});
};

// seed data
const seeds = require("../db/seedData.json");
const seedSongs = (req, res) => {
	Song.deleteMany({})
		.then(() => {
			Song.insertMany(seeds)
				.then((songs) => {
					return res.status(201).send(songs);
				})
				.catch((error) => {
					return res.status(500).send("can't seed the songs; Error:", error);
				});
		})
		.catch((error) => {
			return res
				.status(500)
				.send("can't delete old songs when seeding; Error:", error);
		});
};

module.exports = {
	createSong,
	getAllSongs,
	getSong,
	deleteSong,
	editSong,
	seedSongs,
};
