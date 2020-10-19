const Application = require("./../../db/index").Application;

module.exports = {
  add: async (req, res) => await require("./add")(req, res, Application),
  entries: async (req, res) =>
    await require("./entries")(req, res, Application),
};
