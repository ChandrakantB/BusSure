// index.js or server.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const data = require('./villages-data.json')
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

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

// ✅ Base API Health Check
app.get('/', (req, res) => {
  res.send('✅ MongoDB Connection Successful');
});

// ✅ User Auth APIs
app.use('/api/auth', authRoutes);



///////villages data 

app.get('/api/states' , (req , res) => {
  res.json(Object.keys(data));
});


app.get("/api/districts/:state", (req, res) => {
  const state = req.params.state.toLowerCase().replace(/\s+/g, "");

  const stateObj = data.find(
    (s) => s.state.toLowerCase().replace(/\s+/g, "") === state
  );

  if (!stateObj) {
    return res.status(404).json({ error: "State not found" });
  }

  res.json(stateObj.districts.map((d) => d.district));
});



app.get("/api/subdistricts/:state/:district", (req, res) => {
  const { state, district } = req.params;

  const stateObj = data.find(
    (s) => s.state.toLowerCase().replace(/\s+/g, "") === state.toLowerCase()
  );

  if (!stateObj) {
    return res.status(404).json({ message: "State not found" });
  }

  const districtObj = stateObj.districts.find(
    (d) => d.district.toLowerCase().replace(/\s+/g, "") === district.toLowerCase()
  );

  if (!districtObj) {
    return res.status(404).json({ message: "District not found" });
  }

  res.json(districtObj.subDistricts.map((y) => y.subDistrict));
});




app.get("/api/villages/:state/:district/:subdistrict", (req, res) => {
  const { state, district, subdistrict } = req.params;

  const stateObj = data.find(
    (s) => s.state.toLowerCase().replace(/\s+/g, "") === state.toLowerCase()
  );

  if (!stateObj) {
    return res.status(404).json({ message: "State not found" });
  }

  const districtObj = stateObj.districts.find(
    (d) => d.district.toLowerCase().replace(/\s+/g, "") === district.toLowerCase()
  );

  if (!districtObj) {
    return res.status(404).json({ message: "District not found" });
  }

  const subDistrictObj = districtObj.subDistricts.find(
    (u) => u.subDistrict.toLowerCase().replace(/\s+/g, "") === subdistrict.toLowerCase()
  );

  if (!subDistrictObj) {
    return res.status(404).json({ message: "Subdistrict not found" });
  }

  res.json(subDistrictObj.villages);
});








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
