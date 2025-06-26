// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getAllPartnerRequests,
  approvePartnerRequest,
  rejectPartnerRequest,
} = require('../controllers/admincontroller');

// ✅ Use loginAdmin in the route
router.post('/login', loginAdmin);
router.get('/partner-requests', getAllPartnerRequests);
router.put('/partner-requests/:id/approve', approvePartnerRequest);
router.put('/partner-requests/:id/reject', rejectPartnerRequest);

module.exports = router;
