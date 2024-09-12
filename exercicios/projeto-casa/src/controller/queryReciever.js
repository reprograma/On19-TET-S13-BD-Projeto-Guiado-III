const consoleModel = require("../models/consolesModel")
const gameModel = require("../models/gamesModel")

const consoleFinder = (tag, qry) => {
    const consoleFound = consoleModel.find({[tag] : qry});
    return consoleFound;
}

const gameFinder = (tag, qry) => {
    const gameFound = gameModel.find({[tag] : qry});
    return gameFound;
}

module.exports = {
    consoleFinder,
    gameFinder
}