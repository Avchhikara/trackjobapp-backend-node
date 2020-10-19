const user = require("./controllers/user/index");
const application = require("./controllers/application/index");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send(
      "Server is working, a html page for displaying api's will be sent later"
    );
  });

  app.post("/register", async (req, res) => await user.register(req, res));
  app.post("/login", async (req, res) => await user.login(req, res));
  app.post("/entries", async (req, res) => await application.entries(req, res));
  app.post("/add", async (req, res) => await application.add(req, res));
};
