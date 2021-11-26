const router = require("express").Router();
const { getSong } = require("genius-lyrics-api");


// Gets the lyrics of the music
router.get("/:title/:artist", async (req, res) => {
  const { title, artist } = req.params;

  if (!title || !artist)
    return res.status(400).send("Artist or song name doesn't provided");

  const options = {
    apiKey:
      process.env.GENIUS_API_KEY,  // store your genius api key in the environment
    title,
    artist,
    optimizeQuery: true,
  };

  const response = await getSong(options);

  res.send(response);
});

module.exports = router;
