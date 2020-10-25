const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  location: {
    type: String
  },
  date: {
    type: String,
  },
  url: {
    type: String,
  },
  name: {
    type: String,
    // trim: true,
  }
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;