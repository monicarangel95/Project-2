const router = require("express").Router();
const Events = require("../models/events.js");

router.get("/api/events", (req, res) => {
    Events.find({})
      .then(dbEvents => {
        res.json(dbEvents);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.post("/api/events", ({ body }, res) => {
    Events.create(body)
      .then(dbEvents => {
        res.json(dbEvents);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});


module.exports = router;