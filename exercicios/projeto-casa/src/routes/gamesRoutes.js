const controller = require('../controller/gameController');
const express = require("express");

const route = express.Router()

route.get('/list', controller.listAllGames)
route.get('/:id', controller.findGameById)
route.get('', controller.findGameByQuery)
route.post('/new', controller.addNewGame)
route.patch('/update/:id', controller.updateGame)
route.delete('/delete/:id', controller.deleteGame)

module.exports = route