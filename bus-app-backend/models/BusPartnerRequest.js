const mongoose = require('mongoose');

const busPartnerRequestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('BusPartnerRequest', busPartnerRequestSchema);
