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
  // GET route for getting all of the posts
  app.get("/api/events", function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Event.findAll({
      where: query,
      include: [db.Event],
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/events/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Event.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Event],
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route for saving a new post
  app.post("/api/events", function (req, res) {
    db.Event.create(req.body).then(function (dbEvent) {
      res.json(dbEvent);
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

  // PUT route for updating posts
  //   app.put("/api/posts", function (req, res) {
  //     db.Post.update(req.body, {
  // //       where: {
  // //         id: req.body.id,
  // //       },
  // //     }).then(function (dbEvent) {
  // //       res.json(dbEvent);
  // //     });
  //   });
};
