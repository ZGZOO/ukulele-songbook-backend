const mongoose = require("./connection");

const Song = require("../models/song");

const db = mongoose.connection;

const seedSongs = require("./seedData.json");

// Song.insertMany(seedSongs, (error, songs) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(songs);
// 	}
// 	db.close();
// });

Song.deleteMany({})
	.then(() => {
		Song.insertMany(seedSongs)
			.then((songs) => {
				console.log("Seeded songs: ", songs);
				console.log("Finished seeding.");
				db.close();
			})
			.catch((err) => {
				console.log("Error when inserting: ", err);
				db.close();
			});
	})
	.catch((err) => {
		console.log("Error when deleting old seed: ", err);
		db.close();
	});
