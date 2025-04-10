const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const connectToMongo = require('./db');
const app = express();

// Fix mongoose deprecation warning
mongoose.set('strictQuery', true);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../build')));

// Let environment assign the port
const PORT = process.env.PORT || 8193;

// Middleware
// Middleware
app.use(express.json());
app.use(cors()); // JUST FOR TEST-lab

// Connect to MongoDB
connectToMongo();

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));

// Serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});