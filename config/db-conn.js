const mongoose = require('mongoose');
const { serverLogger } = require('../log/logs');

const connectToDB = async () => {
    try {
        const db_uri = process.env.DB_URI;
        if (db_uri) {
            await mongoose.connect(db_uri);
            serverLogger.info('Database connected');
        }
    } catch (err) {
        serverLogger.error(err);
    }
}

module.exports = connectToDB;