const express = require('express');
const router = express.Router();
const {
  getPendingApprovals,
  approvePartner,
  rejectPartner
} = require('../controllers/adminApprovalsController');

// GET all pending partner requests
router.get('/pending', getPendingApprovals);

// PUT approve partner by ID
router.put('/approve/:id', approvePartner);

// DELETE reject partner by ID
router.delete('/reject/:id', rejectPartner);

module.exports = router;
