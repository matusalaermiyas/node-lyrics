module.exports = (error, req, res, next) =>
  res.status(500).send("Unexpected error occured");
