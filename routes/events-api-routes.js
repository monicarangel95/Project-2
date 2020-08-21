// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all saved events data
  app.get("/api/events", function (req, res) {
    db.Event.findAll({})
    .then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route for saving a new event data
  app.post("/api/events", function (req, res) {
    db.Event.create({
      name: req.body.name,
      location: req.body.location,
      date: req.body.date
    })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/events/:id", function (req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });
  
};
