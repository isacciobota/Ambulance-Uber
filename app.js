const express = require('express');
const morgan= require('morgan');
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');

const dbURL='mongodb+srv://user:user123@cluster0.cq1gm.mongodb.net/Ambulance-Uber?retryWrites=true&w=majority';

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err));
