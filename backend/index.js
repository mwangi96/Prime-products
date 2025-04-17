// main server of the project(node.js)
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./model/dbConnect.js');

// Middleware for Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Base route to test the server
app.get('/', (req, res) => res.send('API Running'));

// Error Handling Middleware - catches all errors
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

// Start the server
app.listen(process.env.port || 4000, function(){
    console.log('Now listening for requests on:http://localhost:4000');
   });
