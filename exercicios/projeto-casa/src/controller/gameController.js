const consoleModel = require('../models/consolesModel')
const gameModel = require("../models/gamesModel")
const qry = require('./queryReciever')

const listAllGames = async (req,res) => {
    try {
        const allGames = await gameModel.find().populate('console');
        res.status(200).json(allGames);
    } catch (error){
        res.status(500).json(error.message);
    };
};

const findGameById = async (req,res) => {
    try {
        const { id } =  req.params
        const findGame = await gameModel.findById(id);
        if (findGame){
            return res.status(200).json(findGame);
        };
        return res.status(404).json({ msg: `No console found with ${id} ID`});
    } catch (error){
        res.status(500).json(error.message);
    };
};

const addNewGame = async (req,res) => {
    try {
        const {
            name,
            developer,
            releaseDate,
            genre,
            mode,
            available,
            description,
            consoleId
        } = req.body
        if (! console){
            return res.status(400).json({ msg: "Required: Enter console ID"});
        };
        const findConsole = await consoleModel.findById(consoleId);
        if (! findConsole) {
            return res.status(404).json({ msg: `No console found with ID ${consoleId}`});
        };
        const newGame = new gameModel ({
            name,
            developer,
            releaseDate,
            genre,
            mode,
            available,
            description,
            console: consoleId
        });
        const savedGame = await newGame.save();
        res.status(201).json({ msg: "New game added:", savedGame});
    } catch (error){
        res.status(500).json(error.message);
    };
};

const updateGame = async (req,res) => {
    try {
        const {
                name,
                developer,
                releaseDate,
                genre,
                mode,
                available,
                consoleId
            } = req.body;
        const updatedGame = await gameModel.findByIdAndUpdate(req.params.id, {
            name,
            developer,
            releaseDate,
            genre,
            mode,
            available,
            consoleId
        });
        res.status(200).json({ msg: `Game ${updatedGame.name} updated successfully`, updatedGame});
    } catch (error){
        res.status(500).json(error.message);
    };
};

const findGameByQuery = async (req,res) => {
    try {
        const { name, dev, launch, genre, available } = req.query;
        if (name){
            const nameFound = await qry.gameFinder("name", name);
            if (nameFound) return res.status(200).json(nameFound);
        };
        if (dev){
            const devFound = await qry.gameFinder("developer", dev);
            if (devFound) return res.status(200).json(devFound);
        };
        if (launch){
            const launchFound = await qry.gameFinder("releaseDate", launch);
            if (launchFound) return res.status(200).json(launchFound);
        };
        if (genre){
            const genreFound = await qry.gameFinder("genre", genre);
            if (genreFound) return res.status(200).json(genreFound);
        };
        if (available){
            const availableFound = await qry.gameFinder("available", available);
            if (availableFound) return res.status(200).json(availableFound);
        };
        res.status(404).json({ msg: `No games found`})
    } catch (error){
        res.status(500).json(error.message);
    };
};

const deleteGame = async (req,res) => {
    try {
        const { id } = req.params
        const foundGame = await gameModel.findById(id)
        if (foundGame){
            await gameModel.findByIdAndDelete(id);
            return res.status(200).json({ msg: `Game deleted`});
        };
        res.status(404).json({ msg:"No game found"})
    } catch (error) {
        res.json(500).json(error.message)
    }
}

module.exports = {
    listAllGames,
    findGameById,
    findGameByQuery,
    addNewGame,
    updateGame,
    deleteGame
}