const router = require("express").Router();

router.get("/", (req, res) => res.send("Welcome to lyrically"));

module.exports = router;
