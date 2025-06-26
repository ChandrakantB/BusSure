// scripts/loadLocations.js
require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Location = require('../models/Location');

async function seedLocations() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI missing in .env");

    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");

    const dataPath = path.join(__dirname, '../allStatesWithPlaces.json');
    const rawData = fs.readFileSync(dataPath);
    const locations = JSON.parse(rawData);

    await Location.deleteMany(); // Clear old
    await Location.insertMany(locations);

    console.log("🌱 Locations seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding locations:", err.message);
    process.exit(1);
  }
}

seedLocations();
