// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the artists info
  app.get("/api/artists", function(req, res) {
    db.Artist.findAll({
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  // POST route for saving a new artist's info
  app.post("/api/artists", function(req, res) {
    db.Artist.create(req.body).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  // DELETE route for deleting saved artist info
  app.delete("/api/artists/:id", function(req, res) {
    db.Artist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

};
