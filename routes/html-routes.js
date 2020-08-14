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

  // Home page route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Artists route loads artists.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/artists.html"));
  });

  // Music route loads music.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/music.html"));
  });

  // Shows route loads shows.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shows.html"));
  });

  // Login route loads login.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

};

// Possible navbar pages:   artists, music, shows, login