const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  name: {
    type: String,
    // trim: true,
    required: "Enter a name for transaction"
  },
  location: {
    type: String,
    required: "Enter an amount"
  },
  date: {
    type: String,
    // default: Date.now
  }
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;