const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

// 🔍 GET buses by route + date
router.get('/', async (req, res) => {
  const { from, to, date } = req.query;

  if (!from || !to || !date) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const buses = await Bus.find({ from, to, date });
    res.json(buses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching buses' });
  }
});

// 📥 POST (add a bus) — optional now
router.post('/', async (req, res) => {
  try {
    const bus = new Bus(req.body);
    const savedBus = await bus.save();
    res.status(201).json(savedBus);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create bus', error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) return res.status(404).json({ message: 'Bus not found' });
    res.json(bus);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bus' });
  }
});


module.exports = router;
