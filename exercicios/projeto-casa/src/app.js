require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect")
const consolesRoutes = require('./routes/consolesRoutes')
const gamesRoutes = require("./routes/gamesRoutes")

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/gamesdoceu/consoles", consolesRoutes);
app.use("/gamesdoceu/games", gamesRoutes);

module.exports = app;