// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ruleRoutes = require('./routes/ruleRoutes');
const app = express();

const cors = require('cors');
app.use(cors());


// Middleware
app.use(bodyParser.json());
app.use('/api/rules', ruleRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = app;
