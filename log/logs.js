const winston = require('winston');
require('./initLogs');

const serverLogger = winston.loggers.get('serverLogger');
const urlLogger = winston.loggers.get('urlLogger');

module.exports = {
    serverLogger,
    urlLogger
};