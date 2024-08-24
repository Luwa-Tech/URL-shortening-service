const {serverLogger}= require('../log/logs');
const { matchedData } = require('express-validator');

class UrlController {
    constructor(urlService) {
        this.urlService = urlService;
    }

    shorten = async (req, res) => {
        serverLogger.http(`Incoming request at ${req.path}`);
        const data = matchedData(req);

        try {
            const findUrl = await this.urlService.getURL(data?.orgurl);

            if (findUrl) {
                serverLogger.info('URL already exists in database');
                res.status(409).json({'message': 'URL already shortened', findUrl});
            };

            const result = await this.urlService.shortenURL(data?.orgurl);
            res.status(201).json({'message': 'URL shortened', result});
        } catch (error) {
            serverLogger.error(error.message);
            res.status(500).json({'message': 'Internal server error'});
        }

    }

    redirectToOrgUrl = async (req, res) => {
        serverLogger.http(`Incoming request at ${req.path}`);
        const urlID = req.params.urlId;

        try {
            const findUrl = await this.urlService.getUrlId(urlID);

            if (!findUrl) {
                serverLogger.warn('URL not found');
                res.status(404).json({'message': 'URL not found'});
            }

            await this.urlService.updateClicks(findUrl.urlId);
            res.redirect(findUrl.orgurl);
        } catch (error) {
            serverLogger.error(error.message);
            res.status(500).json({'message': 'Internal server error'});
        }
    }
}

module.exports = UrlController;