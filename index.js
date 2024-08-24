const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectToDB = require('./config/db-conn');
const express = require('express');
const { serverLogger } = require('./log/logs');
const urlRoute = require('./routes/url-route');
const redirectRoute = require('./routes/redirect-route');

dotenv.config();

const server = express();

connectToDB();

server.use(cors());
server.use(express.static("public"));
server.use(express.json());

server.use('/', redirectRoute);
server.use('/api/v1', urlRoute);

mongoose.connection.once("open", () => {
    server.listen(process.env.PORT, () => {
        serverLogger.info(`Server running on port ${process.env.PORT}`);
    })
})