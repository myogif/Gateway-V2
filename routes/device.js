const express = require('express');
const router = express.Router();
const deviceController = require('../controller/deviceController');


router.get('/', deviceController.infoDevice);

module.exports = router;