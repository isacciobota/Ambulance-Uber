const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middleware
app.use(bodyParser.json());

// Import routes
const doctorRoutes = require('./routes/doctorRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const paramedicRoutes = require('./routes/paramedicRoutes');
const patientRoutes = require('./routes/patientRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');

app.use('/doctors', doctorRoutes);
app.use('/hospitals', hospitalRoutes);
app.use('/paramedics', paramedicRoutes);
app.use('/patients', patientRoutes);
app.use('/admins', adminRoutes);
app.use('/users', userRoutes);
app.use('/email', emailRoutes);

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));


