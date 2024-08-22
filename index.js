const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectToDB = require('./config/db-conn');
const express = require('express');
const logs = require('./log/logs');

dotenv.config();

const server = express();

connectToDB();

server.use(cors());
server.use(express.static("public"));
server.use(express.json());

server.use('/', (req, res) => {
   res.send('Hello, World'); 
});

mongoose.connection.once("open", () => {
    server.listen(process.env.PORT, () => {
        logs.serverLogger.info(`Server running on port ${process.env.PORT}`);
    })
})