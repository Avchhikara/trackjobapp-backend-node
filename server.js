const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//Loading configurations
require("dotenv").config();

const db = require("./db/index");

const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 8080;

// Handling routing
require("./routes")(app);

app.listen(PORT, () => console.log("Server is started on port", PORT));
