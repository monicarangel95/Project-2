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
// app.use(express.static("public"));

// // // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
const routes = require("./routes");
app.use(routes)

// Connects to MongoDB
// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://andrewyen64:Ay57435743@fitnesstracker.cavhs.mongodb.net/spotashow?retryWrites=true&w=majority", {
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spotashow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
// =============================================================
// app.use(require("./routes/api-routes.js"));
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT} !`);
});
