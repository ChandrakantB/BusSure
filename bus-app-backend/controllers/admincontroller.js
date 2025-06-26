const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const BusPartnerRequest = require('../models/BusPartnerRequest');

// ✅ Admin Login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin._id, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Get All Pending Partner Requests
const getAllPartnerRequests = async (req, res) => {
  try {
    const requests = await BusPartnerRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch partner requests' });
  }
};

// ✅ Approve Partner Request
const approvePartnerRequest = async (req, res) => {
  try {
    const request = await BusPartnerRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.status = 'approved';
    await request.save();

    res.status(200).json({ message: 'Request approved successfully', request });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to approve request' });
  }
};

// ✅ Reject Partner Request
const rejectPartnerRequest = async (req, res) => {
  try {
    const request = await BusPartnerRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.status = 'rejected';
    await request.save();

    res.status(200).json({ message: 'Request rejected successfully', request });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to reject request' });
  }
};

module.exports = {
  loginAdmin,
  getAllPartnerRequests,
  approvePartnerRequest,
  rejectPartnerRequest,
};
