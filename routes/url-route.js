const express = require('express');
const UrlService = require('../services/url-service');
const UrlController = require('../controllers/url-controller');
const {validations, validate} = require('../middleware/validate-request');

const urlService = new UrlService();
const urlController = new UrlController(urlService);

const router = express.Router();

router.post('/shorten', validate(validations), urlController.shorten)

module.exports = router;