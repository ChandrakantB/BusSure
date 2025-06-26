const BusPartner = require('../models/BusPartner'); // adjust path if needed

exports.getPendingApprovals = async (req, res) => {
  try {
    const pending = await BusPartner.find({ approved: false });
    res.json(pending);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pending approvals' });
  }
};

exports.approvePartner = async (req, res) => {
  try {
    const updated = await BusPartner.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Approval failed' });
  }
};

exports.rejectPartner = async (req, res) => {
  try {
    await BusPartner.findByIdAndDelete(req.params.id);
    res.json({ message: 'Rejected and removed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Rejection failed' });
  }
};
