const express = require('express');
const router = express.Router();
const readerController = require('../controller/readerControler');


router.get('/', readerController.showReader);


module.exports = router;