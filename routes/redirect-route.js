const express = require('express');
const UrlService = require('../services/url-service');
const UrlController = require('../controllers/url-controller');

const urlService = new UrlService();
const urlController = new UrlController(urlService);

const router = express.Router();

router.get('/:urlId', urlController.redirectToOrgUrl)

module.exports = router;