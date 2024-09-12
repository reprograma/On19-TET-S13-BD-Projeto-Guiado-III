const consoleModel = require('../models/consolesModel')
const query = require('./queryReciever')

const listAllConsoles = async (req,res) => {
    try {
        const allConsoles = await consoleModel.find();
        res.status(200).json(allConsoles);
    } catch (error){
        res.status(500).json(error.message);
    };
};

const findConsoleById = async (req,res) => {
    try {
        const { id } =  req.params
        const findConsole = await consoleModel.findById(id);
        if (findConsole){
            return res.status(200).json(findConsole);
        };
        return res.status(404).json({ msg: `No console found with ${id} ID`});
    } catch (error){
        res.status(500).json(error.message);
    };
};

const addNewConsole = async (req,res) => {
    try {
        const {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available
        } = req.body
        const newConsole = new consoleModel ({
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available
        });
        const savedConsole = await newConsole.save();
        res.status(201).json({ msg: "New console added:", savedConsole});
    } catch (error){
        res.status(500).json(error.message);
    };
};

const updateConsole = async (req,res) => {
    try {
        const {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available
        } = req.body
        const { id } = req.params
        await consoleModel.findByIdAndUpdate(id, {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available
        });
        const updateConsole = await consoleModel.findById(id)
        res.status(200).json({ msg: `Console ${updateConsole.name} updated successfully`, updateConsole});
    } catch (error){
        res.status(500).json(error.message);
    };
};

const findConsoleByQuery = async (req,res) => {
    try {
        const { name, available, dev, display } = req.query
        if (name){
            const findByName = await query.consoleFinder("name", name);
            if (findByName){
                return res.status(200).json(findByName)
            }
        }
        if (available){
            const findByAvailability = await query.consoleFinder("available", available);
            if (findByAvailability){
                return res.status(200).json(findByAvailability)
            }
        }
        if (dev){
            const findByDev = await query.consoleFinder("developer", dev);
            if (findByDev){
                return res.status(200).json(findByDev)
            }
        }
        if (display){
            const findByDisplay = await query.consoleFinder("display", display);
            if (findByDisplay){
                return res.status(200).json(findByDisplay)
            }
        }
        res.status(404).json({ msg:"No consoles found"})
    } catch (error){
        res.status(500).json(error.message);
    };
};

const deleteConsole = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteConsole = await consoleModel.findByIdAndDelete(id);
      const message = `${deleteConsole.name} was successfully deleted`;
      res.status(200).json({ message, deleteConsole });
    } catch (error){
      console.log(error);
      res.status(500).json({ message: error.message });
    };
  };

module.exports = {
    listAllConsoles,
    findConsoleById,
    findConsoleByQuery,
    addNewConsole,
    updateConsole,
    deleteConsole
}