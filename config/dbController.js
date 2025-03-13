const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (err) {
    return console.log("Could not connect", err);
  }
  console.log("Connected to the database");
};
module.exports = connectdb;
