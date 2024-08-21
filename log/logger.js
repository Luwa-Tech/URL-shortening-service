const winston = require('winston');
const { combine, timestamp, errors, printf, cli } = winston.format;

const logger = winston.createLogger({
    level: "http",
    format: combine(
        cli(),
        errors({stack: true}),
        timestamp({
          format: 'hh:mm:ss A',
        }),
        printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [new winston.transports.Console()],
})

module.exports = logger;