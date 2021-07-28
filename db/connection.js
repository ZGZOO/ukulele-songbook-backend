const mongoose = require("mongoose");

let MONGODB_URI = "";

if (process.env.NODE_ENV === "production") {
	MONGODB_URI = process.env.DB_URL;
} else {
	MONGODB_URI = "mongodb://127.0.0.1:27017/" + "ukulele_songbook_db";
}

const config = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(MONGODB_URI, config, () =>
	console.log("connection established to mongodb")
);

// only for this very file's testing before seed.js
// const db = mongoose.connection;
// // ADDITIONAL MESSAGE CONNECTIONS
// db.on("error", (err) => console.log(err.message + " is mongod not running?"));
// db.on("connected", () => console.log("mongo connected: ", mongoURI));
// db.on("disconnected", () => console.log("mongo disconnected"));
// db.close();

module.exports = mongoose;
