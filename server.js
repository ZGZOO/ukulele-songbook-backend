require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const songsRouter = require("./router/songsRouter");
app.use("/songs", songsRouter);

app.set("port", process.env.PORT);
app.listen(app.get("port"), () => {
	console.log(`listening on port ${app.get("port")}`);
});
