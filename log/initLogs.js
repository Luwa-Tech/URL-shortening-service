const winston = require('winston');
const { combine, timestamp, errors, printf, cli } = winston.format;

winston.loggers.add('serverLogger', {
  level: "http",
  format: combine(
    cli(),
    errors({ stack: true }),
    timestamp({
      format: 'hh:mm:ss A',
    }),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
})

winston.loggers.add('urlLogger', {
  format: combine(
    cli(),
    errors({ stack: true }),
    timestamp({
      format: 'hh:mm:ss A',
    }),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
  defaultMeta: {
    service: 'url service'
  }
})
