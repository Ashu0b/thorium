const express = require('express');
const router = express.Router();

welcome.get('/test-me', function (req, res) {
    res.send('Welcome to my application. I am Ashis and a part of FunctionUp Thorium cohort')
});

module.exports = welcome;