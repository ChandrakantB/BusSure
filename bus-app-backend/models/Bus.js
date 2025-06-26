const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  operator: { type: String, required: true },
  type: { type: String, required: true }, // AC, Non-AC, Sleeper, Volvo, etc.
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  duration: { type: String },
  price: { type: Number, required: true },
  seatsAvailable: { type: Number, default: 30 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bus', busSchema);
