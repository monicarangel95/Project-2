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

  // Events route loads shows.html
  app.get("/events", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/events.html"));
  });

  // // Single event route loads shows.html
  // app.get("/events/:id", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/events.html"));
  // });

  // // Login route loads login.html
  // app.get("/login", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

};
