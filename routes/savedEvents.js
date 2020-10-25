const express = require("express");
const router = express.Router();
const Events = require("../models/events.js");

router.get("/", (req, res) => {
  Events.find({})
    .then(dbEvents => {
      res.json(dbEvents);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", ({ body }, res) => {
  Events.create(body)
  .then(dbEvents => {
    res.json(dbEvents);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});  

module.exports = router;