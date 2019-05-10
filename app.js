const express = require('express');
const app = express();

// Middleware
// Executed every time the app receives a request
app.use((req, res, next) => {
    res.status(200).json({
        message: 'hello world'
    });
});


module.exports = app;