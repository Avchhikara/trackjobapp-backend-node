const User = require("./../../db/index").User;

module.exports = {
  register: async (req, res) => {
    await require("./register")(req, res, User);
  },
  login: async (req, res) => {
    await require("./login")(req, res, User);
  },
};
