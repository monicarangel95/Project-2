// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
var compression = require("compression");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(compression());
app.use(logger("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Connects to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spotashow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
// =============================================================
app.use(require("./routes/api-routes.js"));
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT} !`);
});
