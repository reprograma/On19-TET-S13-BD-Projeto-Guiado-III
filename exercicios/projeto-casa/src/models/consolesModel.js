const mongoose = require("mongoose");

const consoleSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    developer: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Number,
      required: true,
    },
    display: {
      type: [String],
      required: true,
    },
    storageCapacities: {
      type: [String],
      required: true,
    },
    numberOfPlayers: {
      type: [Number],
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    description: String,
  },
  { timestamp: true }
);

const Model = mongoose.model("console", consoleSchema);

module.exports = Model;