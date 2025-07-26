const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employees');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
  res.send('Employee Management API is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));