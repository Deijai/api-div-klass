"use strict";
const mongoose = require("mongoose");

const FlyListSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.ObjectId,
    ref: "Person",
    required: true,
  },
  delegation: {
    type: mongoose.Schema.ObjectId,
    ref: "Delegation",
    required: true,
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: "Event",
    required: true,
  },
  stretch: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  flight: {
    type: String,
    required: true,
  },
  travel_date: {
    type: Date,
    required: true,
  },
  arrival_time: {
    type: String,
    required: true,
  },
  ticket_locator: {
    type: String,
    required: true,
  },
  hotel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FlyList", FlyListSchema);
