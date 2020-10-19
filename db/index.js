const mongoose = require("mongoose");
const cred = require("./credentials");

const userModel = require("./model/user");
const applicationModel = require("./model/application");

mongoose.connect(cred.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("MongoDB connected!");
});

module.exports = {
  User: userModel(mongoose),
  Application: applicationModel(mongoose),
};
