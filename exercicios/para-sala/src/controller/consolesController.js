const ConsolesModel = require("../models/consolesModel");
<<<<<<< HEAD
const getAvailable = async (req, res) => {
  try {
    const {available} = req.query
    const findConsoles = await ConsolesModel.find({available})
    if (!findConsoles) {
      return res .status(404).json({message: "filter not found"})
    } 
    res.status (200).json(findConsoles)
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  };
}
=======
>>>>>>> 6a1fd3b56602aaf232ee4894ab2130300e29d25a

const findAllConsoles = async (req, res) => {
  try {
    const allConsoles = await ConsolesModel.find();
    res.status(200).json(allConsoles);
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  };
};

<<<<<<< HEAD
const findConsoleById = async (req, res) => { // rota get
=======
const findConsoleById = async (req, res) => {
>>>>>>> 6a1fd3b56602aaf232ee4894ab2130300e29d25a
  try {
    const findConsole = await ConsolesModel.findById(req.params.id);
    res.status(200).json(findConsole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const addNewConsole = async (req, res) => {
  try {
    const {
      name,
      developer,
      releaseDate,
      display,
      storageCapacities,
      numberOfPlayers,
      available,
      description,
    } = req.body;
    const newConsole = new ConsolesModel({
      name,
      developer,
      releaseDate,
      display,
      storageCapacities,
      numberOfPlayers,
      available,
      description,
    });

    const savedConsole = await newConsole.save();

    res.status(201).json({ message: "New console successfully added", savedConsole });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  };
};

const updateConsole = async (req, res) => {
  try {
    const {
      name,
      developer,
      releaseDate,
      display,
      storageCapacities,
      numberOfPlayers,
      available,
      description,
    } = req.body;
    const updateConsole = await ConsolesModel.findByIdAndUpdate(req.params.id, {
      name,
      developer,
      releaseDate,
      display,
      storageCapacities,
      numberOfPlayers,
      available,
      description,
    });

    res.status(200).json({ message: "Console successfully updated", updateConsole });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const deleteConsole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteConsole = await ConsolesModel.findByIdAndDelete(id);
    const message = `Console with id ${deleteConsole.name} was successfully deleted`;
    res.status(200).json({ message });
  } catch (error){
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

<<<<<<< HEAD
module.exports =
{
  getAvailable,
=======
module.exports = {
>>>>>>> 6a1fd3b56602aaf232ee4894ab2130300e29d25a
  findAllConsoles,
  findConsoleById,
  addNewConsole,
  updateConsole,
  deleteConsole,
};