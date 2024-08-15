const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ruleRoutes = require('./backend/routes/ruleRoutes');
const connectDB = require('./backend/config/db');
const errorHandler = require('./backend/middleware/errorHandler');

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/api/rules', ruleRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
