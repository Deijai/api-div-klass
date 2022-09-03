"use strict";
const mongoose = require("mongoose");

const FlyListSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  rg: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.ObjectId,
    ref: "Role",
  },
  delegation: {
    type: mongoose.Schema.ObjectId,
    ref: "Delegation",
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: "Event",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
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
