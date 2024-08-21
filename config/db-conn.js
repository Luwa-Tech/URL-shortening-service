const mongoose = require('mongoose');
const logger = require('../log/logger');

const connectToDB = async () => {
    try {
        const db_uri = process.env.DB_URI;
        if (db_uri) {
            await mongoose.connect(db_uri);
            logger.info('Database connected');
        }
    } catch (err) {
        logger.error(err);
    }
}

module.exports = connectToDB;