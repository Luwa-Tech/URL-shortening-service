const winston = require('winston');
require('./init-logs');

const serverLogger = winston.loggers.get('serverLogger');
const urlLogger = winston.loggers.get('urlLogger');

module.exports = {
    serverLogger,
    urlLogger
};