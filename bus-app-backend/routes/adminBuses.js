// const express = require('express');
// const router = express.Router();
// const Bus = require('../models/Bus'); // Your existing Bus model

// // All buses
// router.get('/all', async (req, res) => {
//   try {
//     const buses = await Bus.find().sort({ createdAt: -1 });
//     res.status(200).json(buses);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch all buses' });
//   }
// });

// // Only approved buses
// router.get('/approved', async (req, res) => {
//   try {
//     const buses = await Bus.find({ isApproved: true }).sort({ createdAt: -1 });
//     res.status(200).json(buses);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch approved buses' });
//   }
// });

