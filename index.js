const express = require('express');
const {userRoutes } = require('./routes/userRoutes');
const {bookRoutes } = require('./routes/bookRoutes');

const { default: mongoose } = require('mongoose');
const { db } = require('./config/db');

const app = express();
require('dotenv').config()
db.connect();


app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/books', bookRoutes)



app.listen(3000);