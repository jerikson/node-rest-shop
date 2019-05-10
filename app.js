const express = require('express');
const app = express();
const fs = require('fs');

let nodelog = fs.createWriteStream(__dirname  + '/node.log', { flags: 'a' });
let nodeLogPath = __dirname + '/node.log';

// Middleware
// Executed every time the app receives a request
app.use((req, res, next) => {
    res.status(200).json({
       host: req.headers.host
    });
    console.log(`${req.connection.remoteAddress} ${req.method} ${req.originalUrl}`);
    console.log(`${res.statusCode} ${res.statusMessage} \n`);
});


module.exports = app;