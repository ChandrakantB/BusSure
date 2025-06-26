// models/Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  state: { type: String, required: true },
  places: { type: [String], required: true }
});

module.exports = mongoose.model('Location', locationSchema);
