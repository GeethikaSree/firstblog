const express = require('express');
const ejs = require('ejs');
const fs = require('fs');

const app = express();
const port = 3000;

// Load sample posts from a JSON file
const posts = JSON.parse(fs.readFileSync('posts.json', 'utf-8'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

