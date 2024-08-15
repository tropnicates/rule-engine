const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ruleRoutes = require('./routes/ruleRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/rules', ruleRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
