const gamesModel = require("../models/gamesModel");
const consolesModel = require("../models/consolesModel");

const findAllGames = async (req, res) => {
  try {
    const allGames = await gamesModel.find().populate("console");
    res.status(200).json(allGames);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const findGameById = async (req, res) => {
  try {
    const findGame = await gamesModel
      .findById(req.params.id)
      .populate("console");
    if (findGame == null) {
      res.status(404).json({ message: "Game not available" });
    }
    res.status(200).json(findGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findByName = async (req, res) => {
  try {
    const searchName = await gamesModel
      .find(req.params.name)
      .populate("console");
    if (searchName === null) {
      res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(searchName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewGame = async (req, res) => {
  try {
    const {
      consoleId,
      name,
      developer,
      releaseDate,
      genre,
      avaliable,
      description,
    } = req.body;

    if (!consoleId) {
      return res
        .status(400)
        .json({ message: "Required: Enter the Console id." });
    }

    const findConsole = await consolesModel.findById(consoleId);

    if (!findConsole) {
      return res.status(404).json({ message: "Console not found" });
    }

    const newGame = new gamesModel({
      console: consoleId,
      name,
      developer,
      releaseDate,
      genre,
      avaliable,
      description,
    });
    const savedGame = await newGame.save();
    res
      .status(200)
      .json({ message: "New game added successfully!", savedGame });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      consoleId,
      name,
      developer,
      releaseDate,
      genre,
      avaliable,
      description,
    } = req.body;
    const findGame = await gamesModel.findById(id);
    if (findGame == null) {
      res.status(404).json({ message: "Game not found" });
    }

    if (consoleId) {
      const findConsole = await consolesModel.findById(consoleId);

      if (findConsole == null) {
        return res.status(404).json({ message: "Console not found" });
      }
    }
    findGame.name = name || findGame.name;
    findGame.developer = developer || findGame.developer;
    findGame.releaseDate = releaseDate || findGame.releaseDate;
    findGame.genre = genre || findGame.genre;
    findGame.avaliable = avaliable || findGame.avaliable;
    findGame.description = description || findGame.description;
    findGame.console = consoleId || findGame.console;

    const updateGame = await findGame.save();
    res.status(200).json({ message: "Game successfully updated", updateGame });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const findGames = await gamesModel.findById(id);

    if (findGames == null) {
      return res.status(404).json({ message: `Game with id ${id} not found` });
    }
    await findGames.remove();
    res
      .status(200)
      .json({ message: `Game with id ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  findAllGames,
  findGameById,
  addNewGame,
  updateGame,
  deleteGame,
  findByName,
};
