const mongoose = require('mongoose');
const logs = require('../log/logs');

const connectToDB = async () => {
    try {
        const db_uri = process.env.DB_URI;
        if (db_uri) {
            await mongoose.connect(db_uri);
            logs.serverLogger.info('Database connected');
        }
    } catch (err) {
        logs.serverLogger.error(err);
    }
}

module.exports = connectToDB;