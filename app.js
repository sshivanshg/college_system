const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();


const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);



// Check for MongoDB URI or provide a default
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

module.exports = app;
