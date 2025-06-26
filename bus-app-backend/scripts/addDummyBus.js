require('dotenv').config();
const mongoose = require('mongoose');
const Bus = require('../models/Bus');

const buses = [
  {
    operator: "Shivam Express",
    type: "AC Sleeper",
    from: "Indore",
    to: "Bhopal",
    departure: "10:00 AM",
    arrival: "2:00 PM",
    duration: "4h",
    fare: 599,
    price: 599, // ✅ added required field
    date: "2025-06-28", // ✅ add today's/future date
    totalSeats: 20,
    seatsAvailable: 20,
    seats: Array.from({ length: 20 }, (_, i) => ({
      number: i + 1,
      isBooked: false,
      type: i % 2 === 0 ? 'window' : 'aisle'
    })),
  },
  {
    operator: "FastGo Travels",
    type: "Non-AC Seater",
    from: "Lucknow",
    to: "Varanasi",
    departure: "7:00 AM",
    arrival: "1:30 PM",
    duration: "6.5h",
    fare: 449,
    price: 449, // ✅ required field
    date: "2025-06-28", // ✅ add required date
    totalSeats: 30,
    seatsAvailable: 30,
    seats: Array.from({ length: 30 }, (_, i) => ({
      number: i + 1,
      isBooked: false,
      type: i % 3 === 0 ? 'window' : 'seater'
    })),
  }
];

async function insertDummyBuses() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Bus.deleteMany(); // Optional
    const inserted = await Bus.insertMany(buses);
    console.log('✅ Dummy buses inserted:', inserted.length);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error inserting dummy buses:', err.message);
    process.exit(1);
  }
}

insertDummyBuses();
