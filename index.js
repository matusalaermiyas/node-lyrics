require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const express = require("express");
const app = express();

const home = require("./routes/home");
const lyrics = require("./routes/lyrics");
const cover = require("./routes/cover");
const notFound = require("./routes/notFound");
const error = require("./middlewares/error");

if (app.get("env") === "development") app.use(morgan("tiny"));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());

app.use("/", home);
app.use("/lyrics", lyrics);
app.use("/art", cover);
app.use(notFound);
app.use(error);

const port = process.env.PORT || 9000;

app.listen(port);