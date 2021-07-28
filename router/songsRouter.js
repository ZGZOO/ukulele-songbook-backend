const { Router } = require("express");
const router = Router();
const songsMethods = require("../controllers/songsMethods");

router.get("/", songsMethods.getAllSongs);
router.get("/:id", songsMethods.getSong);
router.delete("/:id", songsMethods.deleteSong);
router.put("/:id", songsMethods.editSong);
router.post("/", songsMethods.createSong);
router.get("/seed", songsMethods.seedSongs);

module.exports = router;
