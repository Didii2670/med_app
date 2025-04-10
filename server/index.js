const path = require('path');  // Add this line
const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const connectToMongo = require('./db');
const app = express();

// Fix mongoose deprecation warning
mongoose.set('strictQuery', true);

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serving static files from 'public' folder

// Let environment assign the port
const PORT = process.env.PORT || 8182;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));

// Serve the React app instead of Hello World
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));  // Updated path
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
