// scripts/createAdmin.js
require('dotenv').config(); // ✅ Load .env
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin'); // ✅ Make sure this path is correct

const createAdmin = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      throw new Error("❌ MONGO_URI not found in .env");
    }

    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    const email = 'admin@example.com'; // ✅ You can change this
    const password = 'admin123';       // ✅ And this too

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    console.log("✅ Admin created successfully");
    console.log("👉 Email:", email);
    console.log("👉 Password:", password);
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
};

createAdmin();
