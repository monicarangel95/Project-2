// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // Home page route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Artists route loads artists.html
  app.get("/artists", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/artists.html"));
  });

  // Shows route loads shows.html
  app.get("/events", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/events.html"));
  });
  
  // Music route loads music.html
  app.get("/music", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/music.html"));
  });

  // Login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

};

// Possible navbar pages:   artists, music, shows, login