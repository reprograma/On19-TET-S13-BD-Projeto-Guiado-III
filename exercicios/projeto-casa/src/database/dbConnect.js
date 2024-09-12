const MONGO_URL = process.env.MONGO_URL;

const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};