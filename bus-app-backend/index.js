// index.js or server.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const adminBusRoutes = require('./routes/adminBuses');

require('dotenv').config();

const locationRoutes = require('./routes/LocationRoutes');

// const busRoutes = require('./routes/busRoutes'); // ✅ New route

// ...





const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Connect to MongoDB
connectDB();

// ✅ Global Middlewares
app.use(cors());
app.use(express.json());

// ✅ Base API Health Check
app.get('/', (req, res) => {
  res.send('✅ MongoDB Connection Successful');
});

// ✅ User Auth APIs
app.use('/api/auth', authRoutes);

// ✅ Admin APIs (Login + Approvals)
// app.use('/api/admin', adminRoutes); // this will include /login, /approvals

//for the locations loading

// app.use('/api/locations', locationRoutes);


//for the bus loading 
// app.use('/api/buses', busRoutes);


//for admin section all buses
// app.use('/api/admin/buses',adminBusRoutes);


// ✅ Dummy user creation API (for testing)
const User = require('./models/User');
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
