// Create web server
// Use express.js
const express = require('express');
const app = express();
const PORT = 3000;

// Use express middleware to parse json
app.use(express.json());

// Create a list of comments
let comments = [
    {
        id: 1,
        username: "Alice",
        comment: "Hello World!"

    },  
    {
        id: 2,
        username: "Bob",
        comment: "Nice to meet you!"
    }
];











