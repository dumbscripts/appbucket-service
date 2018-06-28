'use strict';

const morgan = require('morgan');
const log4js = require('log4js');
const fs = require('fs');
const path = require("path");

//add log4js and morgan logger components
const logPath = path.join(__dirname, '../../logs/app.log');
log4js.configure({
    appenders: { 'file': { type: 'file', filename: logPath } },
    categories: { default: { appenders: ['file'], level: 'debug' } }
});


//var log4js = log4js.getLogger();
var theHTTPLog = morgan('combined', {
    "format": "default",
    "stream": (fs.createWriteStream(logPath, { flags: 'a' }))
});

module.exports = {
    theHTTPLog,
    log4js,
    morgan
}