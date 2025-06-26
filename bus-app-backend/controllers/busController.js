// admin/controllers/busController.js
const Bus = require('../../models/Bus'); // Adjust path based on your structure

// @desc   Get all approved buses
// @route  GET /api/admin/buses
// @access Admin Only
const getAllApprovedBuses = async (req, res) => {
  try {
    const buses = await Bus.find({ isApproved: true }).populate('operator', 'name email');
    res.status(200).json(buses);
  } catch (error) {
    console.error("❌ Error fetching approved buses:", error.message);
    res.status(500).json({ error: 'Server Error while fetching buses' });
  }
};

module.exports = {
  getAllApprovedBuses,
};
